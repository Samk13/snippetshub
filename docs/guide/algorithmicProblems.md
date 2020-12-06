# algorithmicProblems

# Memoization

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

## fib tabulation

```js
const fib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};
console.log(fib(6));
console.log(fib(7));
console.log(fib(63));
console.log(fib(64));
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

## gridTraveler tabulation solution

```js
const gridTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }
  return table[m][n];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
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

## tabulation solution

```js
const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
};

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
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

## how sum tabulation solution

```js
const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  return table[targetSum];
};

console.log(howSum(7, [5, 3, 4]));
console.log(howSum(7, [2, 4]));
console.log(howSum(400, [7, 14, 200]));
```

# Can construct

## Best sum

Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination you may return any one of the shortest.

```js
bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    const remainders = targetSum - num;
    const remainderCombination = bestSum(remainders, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      // if the combination is shorter than the current 'shortest', update it
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
```

## Best Sum tabulation solution

```js
const BestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        // if this current combination is shorter that what is already stores
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(BestSum(7, [5, 3, 4]));
console.log(BestSum(7, [2, 4]));
console.log(BestSum(400, [7, 14, 200]));
console.log(BestSum(400, [25, 1, 2, 50]));
```

## Queue Data Structure

```js
class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue(val) {
    if (this.size === 0) {
      console.error("You can't dequeue an empty queue");
      return null;
    }

    const removedNode = this.front;
    if (this.size === 1) {
      this.back = null;
    }

    this.front = this.front.next;
    this.size--;
    return removedNode.val;
  }
}

const myQueue = new Queue();

//  testing
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
console.log(myQueue.size);
console.log(myQueue.front.val);
console.log(myQueue.back.val);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.size);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.front);
console.log(myQueue.back);
```

## Snake game in terminal

```js
class Snake {
  constructor() {
    this.snakeBody = [
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ];
  }

  move(direction) {
    const delta = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
    };
    const currentHead = this.snakeBody[this.snakeBody.length - 1];
    const [currRow, currCol] = currentHead;
    const [changeRow, changeCol] = delta[direction];
    const newHead = [currRow + changeRow, currCol + changeCol];
    this.snakeBody.push(newHead);
    this.snakeBody.shift();
  }

  draw() {
    const grid = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(" ");
      }
      grid.push(row);
    }

    this.snakeBody.forEach((pos) => {
      const [row, col] = pos;
      grid[row][col] = "O";
    });
    console.clear();
    grid.forEach((row) => console.log(row.join("|")));
    // console.log(grid);
  }
  play() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");

    stdin.on("data", (keypress) => {
      if (keypress === "w") this.move("up");
      if (keypress === "a") this.move("left");
      if (keypress === "s") this.move("down");
      if (keypress === "d") this.move("right");
      if (keypress === "\u0003") process.exit();

      this.draw();
    });
  }
}

const game = new Snake();
game.play();
```

## can Construct

Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.

You can reuse elements of`wordBank` as many times as needed.

```js
const CanConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (table[i] !== false) {
      for (let word of wordBank) {
        // if  the word match the character start at position i
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
};

console.log(CanConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // -> true
console.log(
  CanConstruct("skateboarde", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // -> false
```
