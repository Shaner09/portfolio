import React, { useReducer, useContext, createContext} from 'react'

const initialState = {
  sections: ['Intro', 'Technical Skills', 'About Me', 'Links', 'Portfolio'],
  displayedSections: 'All',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_DISPLAYED_SECTION':
      return { ...state,
        displayedSections: action.payload}
    default:
      return state
  }
}

const dataContext = createContext()

// Provider component that wraps your app and makes cart object ...
// ... available to any child component that calls useCart().
export function ProvideData({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <dataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </dataContext.Provider>
  )
}

// Hook for child components to get the cart object ...
// ... and re-render when it changes.
export const useData = () => {
  return useContext(dataContext)
}

// Provider hook that creates cart object and handles state
const useProvideData = () => {
  const { state, dispatch } = useData()

  const changeDisplayedSection = (challenge) => {
    dispatch({
      type: 'CHANGE_DISPLAYED_SECTION',
      payload: challenge,
    })
  }

  return {
    state,
    changeDisplayedSection,
  }
}

export default useProvideData
