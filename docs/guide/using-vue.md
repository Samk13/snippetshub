---
tags: ["js", "javascript"]
---
# questions from hacker rank
## Regular Expressions
In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details",
Task:"Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
> solution
```js
 function regexVar() {
/*
    * Declare a RegExp object variable named 're'
    * It must match a string that starts and ends with
    * the same vowel (i.e., {a, e, i, o, u})
    */
let re = /^(a|e|i|o|u).*\1$/
/*
    * Do not remove the return statement
    */
return re;
}
```

## extract certain chars from a string
In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.",
Task:`Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
1-First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
2- Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

>solution
```js
/*
* Complete the vowelsAndConsonants function.
* Print your output using 'console.log()'.
*/
function vowelsAndConsonants(s) {
    const result = []
    for (let i=0; i < s.length; i++){
    let currentChar = s[i]
    if('aeiou'.includes(currentChar)){
        result.push(currentChar)
    }
    }
    for (let i=0; i < s.length; i++){
    let currentChar = s[i]
    if(!'aeiou'.includes(currentChar)){
        result.push(currentChar)
    }
    }
    return result.forEach(i => console.log(i))
}
```
## Reverse a string
In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.<br>
Task:<br>Complete the reverseString function; it has one parameter, . You must perform the following actions:
<br>
Try to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

>Solution:
```js
/*
* Complete the reverseString function
* Use console.log() to print to stdout.
*/
function reverseString(s) {
    try {
        return console.log(s.split('').reverse().join(''))
    } catch(error){
        console.log(error.message)
        console.log(s)
    }}
```
## class inheritance
In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.",
Task:`We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
Add an area method to Rectangle's prototype.
Create a Square class that satisfies the following:
It is a subclass of Rectangle.
It contains a constructor and no other methods.
It can use the Rectangle class' area method to print the area of a Square object.
Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.

>Solution:
```js
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
/*
*  Write code that adds an 'area' method to the Rectangle class' prototype
*/
Rectangle.prototype.area = function(){
    return this.w * this.h
}
/*
* Create a Square class that inherits from Rectangle and implement its class constructor
*/
class Square extends Rectangle {
    constructor(s){
        super(s)
        this.h = s
        this.w = s
    }
}
```

## create Nodejs server

fast way to create a simple server
```js
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req,res) =>{
    res.statusCode = 200
    res.setHeader('content-Type', 'text/plain')
    res.end('Hello world')
})

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hotname}:${port}`)
})

```
## github pages not updating after push
>in vuepress

long story short :

:::tip possible solution
check in `docs/.vuepress/config.js`
 ```json
 base: "/snippetshub/",
 ```
 more info : [vuepress deploy](https://vuepress.vuejs.org/guide/deploy.html#github-pages)
:::

## other solution is adding `.nojekyll` file in the build folder
When publishing an Antora site to GitHub Pages, it's necessary to an empty file to the root directory named .nojekyll. The existence of this file tells GitHub Pages not to run the published files through Jekyll.
You can add it manually, But if you are using travis for automating the build you can do that by
adding this 2 lines in the script section

```yml
script:
  - yarn build # npm run docs:build
  - cd docs/.vuepress/dist
  - touch .nojekyll
```
you can cd into a folder using travis by adding the `- cd <YOUR_PATH>`, and creating new file `- touch <FILE_NAME>`like you do in the termenial basically

## Travis
my travis file for my vuepress app
```yml
language: node_js
node_js:
  - lts/*

install:
  - yarn install # npm ci

script:
  - yarn build # npm run docs:build
  - cd docs/.vuepress/dist
  - touch .nojekyll

deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github-token: $GITHUB_TOKEN
  keep_history: true
  on:
    branch: master
```
## Adding travis to your project

<!-- <iframe title="Adding travis" width="100%" height="500" src="https://www.youtube.com/embed/BFpSD2eoXUk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<iframe title="Adding travis" width="100%" height="500" src="https://www.youtube-nocookie.com/embed/BFpSD2eoXUk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Dark mood in vue press
I am using the work in progress plugin now `vuepress-theme-default-vue-a11y`
Yes I know that it make things a bit slower and make Axe isses in the console, but it's fine for now.

## cross site cookies

<iframe title="SameSite Cookies - Chrome Update" width="100%" height="500" src="https://www.youtube-nocookie.com/embed/GPz7onXjP_4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

you should add `title="SameSite Cookies - Chrome Update"` after adding a youtube emded video so the axe issues will not complain in the console

:::warning Youtube stuff
- in youtube embed videos: replace `https://www.youtube.com/embed/...` to `https://www.youtube-nocookie.com/embed/...`
so your console will not complain about cross site cookies
- or when you grab youtube links you press share => Embed => check: Enable privacy-enhanced mode.
:::