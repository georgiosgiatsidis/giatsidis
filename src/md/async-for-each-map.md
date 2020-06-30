---
path: '/posts/async-foreach-map-in-js'
date: '2020-06-30'
title: 'Async forEach , map in Javascript'
---

In this post we demonstrate the useage of async functions with Array.map and Array.forEach.

### For each

```js
const array = [10, 20, 30, 40];

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncForEach = async () => {
  await array.forEach(async item => {
    await wait(50);
    console.log(item * 2); // ✅ 20, 40, 60, 80
  });
};

asyncForEach();

```
### Map

The async version of map just maps every item to a Promise. Then we have to wait for all the promises to resolve using the [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) function.
```js
const asyncMap = async () => {
  return Promise.all(
    array.map(async item => {
      await wait(50);
      return item * 2;
    })
  );
};

const result = await asyncMap();

console.log(result); // ✅ [ 20, 40, 60, 80 ]
```
