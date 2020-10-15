# interview tests

## question 1

Given a string, return the middle character of the string. If the string's length is odd, return the middle character. If the string's length is even, return the middle 2 characters.

## Examples

```
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"
```

## Input

A string of length 0 < str < 1000.

## Output

The middle character(s) of the string, represented as another string.

```js
// My solution

let x = "test sam";
let stringLength;
let position;

const getMiddle = (str) => {
  if (
    (typeof str === "string" || str instanceof String) &&
    str.length > 0 &&
    str.length < 1000
  ) {
    if (str.length % 2 === 1) {
      position = str.length / 2;
      stringLength = 1;
    } else {
      position = str.length / 2 - 1;
      stringLength = 2;
    }
    return str.substring(position, position + stringLength);
  } else {
    return 'please enter a "string" value ✍';
  }
};
```

# sum of all numbers that are multiples

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

## Specification

Create a solution that returns the sum of all numbers that are multiples of 3 or 5, and are smaller than a given number.

## Examples

sum35(10) should return 23
sum35(200) should return 9168

## Input

An integer specifying the exclusive upper bound.

## Output

An integer containing the sum.

```js
// My solution

const sum35 = (num) =>
  !isNaN(num) && num > 0 && num < 1000
    ? [...Array(num).keys()]
        .filter((i) => i % 3 === 0 || i % 5 === 0)
        .reduce((a, b) => a + b)
    : "please enter a valid number between 0 and 1000✍"; // or undefined or null
```

# Markdown question

Markdown is a formatting syntax used by many documents (these instructions, for example!) because of its plain-text simplicity and its ability to be translated directly into HTML.

## Specification

Write a simple markdown parser function that will take in a single line of markdown and translate it into the appropriate HTML. To keep it simple, support only one feature of markdown in atx syntax: headers.
Headers are designated by 1-6 hash characters followed by a space, followed by text. The number of hashes determines the header level of the HTML output.

Header content should only come after the initial hashtag(s) plus a space character.
Invalid headers should just be returned as the markdown that was received, no translation necessary.
Spaces before the hashes and after the header should be kept in the output, but between the hashes and the text only one space is allowed.

## Examples

```
"# Header" should return "<h1>Header</h1>"
"## Header" should return "<h2>Header</h2>"
"###### Header" should return "<h6>Header</h6>"
"####### Header" should return "####### Header" (too many hashes)
"###  Header" should return "###  Header" (too many spaces between)
"Header" should return "Header" (no hashes)
```

## Input

A string that contains markdown text.

## Output

A string that contains html formatted text, if the input is valid markdown. Otherwise it just returns the input.

```js
// My solution:

const markdown = (str) => {
  const h1 = /^(#{1}\s{1})/;
  const h2 = /^(#{2}\s{1})/;
  const h3 = /^(#{3}\s{1})/;
  const h4 = /^(#{4}\s{1})/;
  const h5 = /^(#{5}\s{1})/;
  const h6 = /^(#{6}\s{1})/;
  const manyHashes = /^(#{7,}\s{1})/;
  const manyspaces = /^(#{1,6}\s{2,})/;

  if (manyspaces.test(str)) {
    return `${str} (too many spaces between)`;
  } else if (h1.test(str)) {
    return `<h1>${str.substring(2).trim()}</h1>`;
  } else if (h2.test(str)) {
    return `<h2>${str.substring(3).trim()}</h2>`;
  } else if (h3.test(str)) {
    return `<h3>${str.substring(4).trim()}</h3>`;
  } else if (h4.test(str)) {
    return `<h4>${str.substring(5).trim()}</h4>`;
  } else if (h5.test(str)) {
    return `<h5>${str.substring(6).trim()}</h5>`;
  } else if (h6.test(str)) {
    return `<h6>${str.substring(7).trim()}</h6>`;
  } else if (manyHashes.test(str)) {
    return `${str} (too many hashes)`;
  } else {
    return str;
  }
};
```

I got rejected with this reply :

> some of the functions could have been written both less verbose, more performant, and more readable. For instance, the functional (filter/reduce) solution to Q2 is very wasteful in terms of CPU and memory, and the duplication in Q3 should have been generalized. We also lacked comments or other info that explained the implementation choices. Maybe you considered the imperative solution in Q2 and decided against it for a good reason? We were unable to tell.

Personally I love map, reduce, filter, find and I have been using them for a while now. They helped me write clean, short, fast and straight to the point code which aligned with my thought process. I use a for loop "the faster choice" when I have no choice left. As far as you didn't mention, performance optimization is required.

So guys if you feel like you have better way solving these question just commit your solution and I will add it here

# Future skills

module.exports = class Solution {
constructor(api) {
this.api = api;
// You can initiate and calculate things he
this.level1(0)

}

/\*\*

- Let the dog eat bone number Zero (0).
- \*/
  level1(boneNumber) {
  // Write your code here
  this.api.eatBone(0)
  }

/\*\*

- Let the dog eat bones numbered 0, 1 and 2.
- \*/
  level2() {
  // Write your code her
  const bones = this.api.getBonesForDog(0)
  bones.map((b)=>this.api.eatBone(b))
  }

/\*\*

- Use a loop to let the dog eat all bones. There 18 bones numbered from
- 0 to 17.
- \*/
  level3() {
  let i = 0
  while ( i<= 17){
  this.api.eatBone(i)
  i++
  }
  }

/\*\*

- Let the dog eat only brown bones(8). There are 22 bones numbered from
- 0 to 21.
- \*/
  level4() {
  let i = 0
  while ( i<= 22){
  if(this.api.isBrownBone(i))
  this.api.eatBone(i)
  i++
  }
  }

/\*\*

- Let the dog eat all bones except for bone numbers 2, 4 and 5. There
- are 10 bones numbered from 0 to 9. Use the continue keyword.
- \*/
  level5() {

  for (let i = 0; i <= 9 ; i++){
  if(i === 2 || i === 4 || i === 5){
  continue
  }
  this.api.eatBone(i)
  }
  }

/\*\*

- Let the dog eat available bones until it is time to go home. There are
- 10 bones numbered from 0 to 9. Use the break keyword.
- \*/
  level6() {
  // Write your code here
  }

/\*\*

- Let all dogs, eat their corresponding bones. Use nested loops.
- \*/
  level7() {
  // Write your code here
  }
  }

  [there is an API to use there](https://app.futureskill.com/exercise/5eb41161fafd713c88d5e338)

:::tip
here is my solition
:::

```js
module.exports = class Solution {
  constructor(api) {
    this.api = api;
    // You can initiate and calculate things he
    this.level1(0);
  }

  /**
   * Let the dog eat bone number Zero (0).
   *
   */
  level1(boneNumber) {
    // Write your code here
    this.api.eatBone(0);
  }

  /**
   * Let the dog eat bones numbered 0, 1 and 2.
   *
   */
  level2() {
    // Write your code her
    const bones = this.api.getBonesForDog(0);
    bones.map((b) => this.api.eatBone(b));
  }

  /**
   * Use a loop to let the dog eat all bones. There 18 bones numbered from
   * 0 to 17.
   *
   */
  level3() {
    let i = 0;
    while (i <= 17) {
      this.api.eatBone(i);
      i++;
    }
  }

  /**
   * Let the dog eat only brown bones(8). There are 22 bones numbered from
   * 0 to 21.
   *
   */
  level4() {
    let i = 0;
    while (i <= 22) {
      if (this.api.isBrownBone(i)) this.api.eatBone(i);
      i++;
    }
  }

  /**
   * Let the dog eat all bones except for bone numbers 2, 4 and 5. There
   * are 10 bones numbered from 0 to 9. Use the continue keyword.
   *
   */
  level5() {
    for (let i = 0; i <= 9; i++) {
      if (i === 2 || i === 4 || i === 5) {
        continue;
      }
      this.api.eatBone(i);
    }
  }

  /**
   * Let the dog eat available bones until it is time to go home. There are
   * 10 bones numbered from 0 to 9. Use the break keyword.
   *
   */
  level6() {
    // Write your code here
  }

  /**
   * Let all dogs, eat their corresponding bones. Use nested loops.
   *
   */
  level7() {
    // Write your code here
  }
};
```

# Trial test

Trial
This is a trial test which is meant to give an opportunity to try out the interface before the actual test is started.

The task is to retrieve a "magical number" from the API and then implement a method which returns the same number back. You get one point for a test level which is solved correctly, otherwise zero points.

This is a very simple task but please take the opportunity to try out the interface, how to do printouts to the console in the bottom right corner etc.

There is a help function which you access via the button with a question mark in the top right corner.

```js
const SolutionInterface = require("./SolutionInterface");
const api = require("./API");

module.exports = class Solution extends SolutionInterface {
  constructor() {
    super();
    this.api = api;

    // You can initiate and calculate things here
  }

  /**
   * Return the magic number which you get from the api.
   *
   *
   * @return {number (integer)}
   */
  returnMagicNumber() {
    // Write your code here
    return this.api.getMagicNumber();
  }
};
```

Cow Counting
Overview
You are supposed to count cows on a field. The field forms an n times n grid, and the cows are organised and will only stand one by one within a grid square. Your two counting tasks are described below, followed by a description of the available API, the canvas, and how the score is calculated.

Make sure to read the entire description before attempting the tasks.

Task 1: Corner Cows (2 points)
Your first task is to count the number of shy cows hiding in the corners of the field.

Example
In this 3 by 3 field, there are 2 cows hiding in the corners. Their (x, y) positions are (0, 0) and (2, 2).

Task 2: Neighbor Cows (8 points)
Your second task is to count the number of cows with at least one neighboring cow. Cows are considered neighbors if they are next to each other in the cardinal directions, but not the diagonals.

Example
In this 3 by 3 field, there are 4 cows with neighbors. There are 2 cows with neighbors on row y=0, and also 2 cows with neighbors in column x=2.

API Description
The following data is available for you to access through the API provided. Details about the API functions and the data they provide can be found under the API tab.

Get field size - Returns n, the size of the n by n field. The minimum size is 1.
Get number of cows - Returns the number of cows on the field.
Get x - Returns the x-position of a given cow. Starting at 0.
Get y - Returns the y-position of a given cow. Starting at 0.
Canvas Description

Scoring
Focus on getting the correct output, as this is the major part of the scoring (80%). You can see your points for each level in the canvas on the bottom right when you press 'Run code', 2 points are awarded for Task 1 and 8 points are awarded for Task 2. Note that your code will be assessed using hidden levels of different configurations. Ensure your code works for all scenarios.

20% of your score is calculated through time-complexity analysis of your solution, so if you have time try to consider how to make your solution as efficient as possible.

A tip to get started is to return 0 as the solution for each task and press "Run code" to see what happens.

```js
const SolutionInterface = require("./SolutionInterface");
const api = require("./API");

module.exports = class Solution extends SolutionInterface {
  constructor() {
    super();

    this.api = api;
  }

  /**
   * Task 1: Return the number of cows hiding in corners.
   *
   *
   * @return {number (integer)}
   */
  getNumberOfCowsInCorners() {
    // Write your code here
    return this.api.getNumberOfCows();
  }

  /**
   * Task 2: Return the number of cows with neighbors.
   *
   *
   * @return {number (integer)}
   */
  getNumberOfCowsWithNeighbours() {
    // Write your code here
    return -2;
  }
};
```

const SolutionInterface = require('./SolutionInterface');
const api = require('./API');

module.exports = class Solution extends SolutionInterface {
constructor() {
super();

    this.api = api

}

/\*\*

- Task 1: Return the number of cows hiding in corners.
-
-
- @return {number (integer)}
  \*/
  getNumberOfCowsInCorners() {
  // Write your code here
  let fSize = this.api.getFieldSize()
  let cows = this.api.getNumberOfCows()
  let index = 7
  let x = this.api.getX(cows-1)
  let y = this.api.getY(cows-1)


    console.log(x,y)
    console.log(cows)

    let arr = []


    for(let i = 0;i < cows; i++){
     arr.push(i)
    }
    console.log(arr)
    return cows

}

/\*\*

- Task 2: Return the number of cows with neighbors.
-
-
- @return {number (integer)}
  \*/
  getNumberOfCowsWithNeighbours() {
  // Write your code here
  return -2;
  }
  }
