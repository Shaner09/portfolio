# Kenzie Academy Challenge: Tic-Tac-Toe

Follow the instructions provided on my.kenzie.academy for this challenge. The `code.js` file is a placeholder. Feel free to rename it add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan

For the basic section, I plan on creating aan array with 3 arrays in it, each containing 3 strings which depict the state of the space in the tic tac toe board. ths array will be in state and will be mapped through to render the board. I will use either icons, or large font to display x and o. I am going to have a variable in state that keeps track of whose turn it is, and it will be changed every time a valid move is made. I am going to make a function that reads the board and creates an object containing each winning combination. this object will be looped through every time someone moves to check for winners. when it finds a winner, it will add it to state, and noone will be able to make a move until the board is reset because the functions will require the iswinner variable to be false to return a winner. for the intermediate, I will add an isSinglePlayer variable to state, users will be able to manipulate this variable by clicking a checkbox. When it is true, a useEffect will detect when the user makes a move and then it will takeover. it will find all empty spaces in the board and group them in an array. a random index in this array will be chosen to recieve their move. for the advanced part, i will use the object i created earlier to assign points to each winning combination depending on which marks are present in the winning combo. from most to least points will be : 2 os, 2xs, 1x, 1o, 3 empty, and thenn 1o1x. the ai will then loop through the empty spaces and for each empty space, it will check to see if it is contained within each winning combination from our object. each empty spot will recieve the points from each combination it is part of. the empty space with the most points will be chosen as the ai's move. depending on which player wins, the isWinner variable will be given a certain value so the UI can differentiate between a p1 win, a p2 win, and a tie and will render as such. I will add three more state variables to display the score. At the end of the checkWin function, depending on who won, the corresponding variable will be incremented by one.

_(Put your project plan here. It could be pseudocode, an outline-style development plan, etc. But whatever form you choose, it should be detailed enough that another developer could feasibly use it to implement your solution.)_

## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

I considered using an object containing 9 objects with their own keys with an x and a y value to be the datamodel but i chose not to because it is easier when an array kind of takes care of the x and y for you by using the indexes. I also thought of just having a 9 element long array to represent the board, but i prefered nested arrays for visualization. The positive to using an object to represent the board is i feel i would have been able to store more information within it. I chose instead to loop through my array and gather info seperately.

_(Put your reflection answer here.)_