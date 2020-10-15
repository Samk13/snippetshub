# javaScript useful functions

## print odd numbers

```js
let x = () => {
  for (var i = 0; i < 100; i++) {
    // check that the number is even
    if (i % 2 == 0) {
      continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
  }
};
```

## Use Confirm

```js
let x = () =>
  confirm("are you sure ?") ? console.log("true") : console.log("false");
```

# public APIs

[this repo contain many](https://github.com/public-apis/public-apis)
