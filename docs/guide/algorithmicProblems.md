# algorithmicProblems

(Solve Algorithmic Problems)[https://www.youtube.com/watch?v=oBt53YbR9Kk&ab_channel=freeCodeCamp.org]

## fib memoization

Fibonacci number
each number is the sum of the two preceding ones
[0,1,1,2,3,5,8,13,21,34,55,89,144]

```js
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
```

<br>
## travel 2d grid

say that you are a traveler on a 2D grid, you begin in the top-left corner and your goal is to travel to the bottom-right corner you may only move down or right.

in how many ways can you travel to the goal on a grid with dimension `m * n` ?

```js
const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};
```

---

<br>
write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as args

the function should return a boolean indicating whether or not it is possible to generate the targetSum
using from the array.

You may use an element of the array as many times as needed.
You may assume that all input numbers are nonnegative.

```js
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
```

## howSum

Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds to the targetSum, then return null.

If there are multiple combination possible, you may return any single one.

```js
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};
```
