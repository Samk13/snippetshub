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

let x = 'test sam';
let stringLength;
let position;

const getMiddle = (str) => {
  if ((typeof str === 'string' || str instanceof String)
  && (str.length > 0 && str.length < 1000) ) {

      if (str.length % 2 === 1) {
        position = str.length / 2;
        stringLength = 1
      } else {
        position = str.length / 2 -1;
        stringLength = 2;
      }
      return str.substring(position, position + stringLength);


  } else {
    return 'please enter a "string" value ✍'
  }
}
```

#  sum of all numbers that are multiples

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

 const sum35 = num => !isNaN(num) && num > 0 && num < 1000
 ? [...Array(num).keys()].filter(i => i % 3 === 0 || i % 5 === 0).reduce((a,b) => a + b)
 : 'please enter a valid number between 0 and 1000✍'; // or undefined or null
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
  } else if(h1.test(str)){
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
}
```