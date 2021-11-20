import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProvideData } from './useData';

ReactDOM.render(
  <React.StrictMode>
    <ProvideData>
    <div style={{background:'#F5F8DE', height:'100vh'}}>
    <App />
    </div>
    </ProvideData>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
