# Kenzie Academy Challenge: Loops With Arrays

Follow the instructions provided on `my.kenzie.academy` for this challenge. The `code.js` file is a placeholder. Feel free to rename it or add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required section is **Reflection** (and the **Project Plan** if you complete the Advanced Level), but if you used a unit testing framework, also fill in the **Running the Unit Tests** section. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Running the Unit Tests (Basic and Intermediate Levels Only)

_(Instructions for how to install the unit testing framework and run the unit tests.)_

## Project Plan (Advanced Level Only)

_(Put your project plan here. It could be pseudocode, an outline-style development plan, etc. But whatever form you choose, it should be detailed enough that another developer could feasibly use it to implement your solution.)_

I would like to make three components, one for each difficulty level. In the first two components, Every function will share the same state variable that updates the dom and depending on which button is pressed, it changes what is displayed to the dom. for the advanced level, it doesnt seem to need to be responsive, so i will just display all of the boxes and not mess with state too much. I'm going to give each component the ability to hide and show itself when clicking on it, because the program will be quite lengthy. I will use the reducer functions to control state where necessary, but I would prefer to keep state local, as it is not important for other parts of the app to have each components data. As far as data structures go, I will be dealing mostly with arrays, so nothing too complex, just a couple arrays here and there that i will iterate through/manipulate. The DOM is an api, and i will be using that. I imagine bootstrap uses an api as well and i will be using that.


## Reflection

### Basic and Intermediate Levels Only

For a software developer, what are the benefits of good unit tests? Are there any drawbacks to writing unit tests?

_(Put your reflection answer here.)_

Reflection: Unit tests can be very helpful, I discovered that mostly when i was rewriting the functions for the advanced portion. I think they are more helpful for debugging/modifying an app than they are when creating the app. In the basic/intermediate portion, I would say i spent at least half of my time writing the tests and making sure i didnt write anything incorrectly. I would have preferred not to write them. However, they saved me a TON of time on the advanced portion. they made testing my functions very quick and easy. They even caught some mistakes I would have otherwise overlooked. Writing a unit test to check a 20 element long array for numbers divisible by 3 and 7 and in descending order can be a more tedious challenge than writing the function itself. It requires 40 calculations and manual sorting. That is alot of room for human error, and by the end of it, when your test fails, you dont immediately know if you messed up the test, or the function. I will confess for most of the unit tests i wrote the function first and then copy and pasted the result into the test. I would 100 percent use a unit test in any function in a large scale app, or for a very complex function in a small scale app that instead of checking for an array, checked for something easier to write, for instance: a number, or a boolean, or a short string.

### Advanced Level Only

For the bar graphs, did you uses JS or CSS to add in the styling? Explain your choice.

What are the advantages and disadvantages of using various JS methods instead of `for`/`while` loops?

_(Put your reflection answer here.)_

Reflection:I used javascript to change the css styling for my boxes. It seemed like an easier task than writing a css rule for each individual box. The benefits of using methods instead of for/while loops are their readability and less code to write. I prefer loops when I dont have an array to modify. for instance: if i want to find the even numbers from 1-100 but i do not have an array to iterate through.
