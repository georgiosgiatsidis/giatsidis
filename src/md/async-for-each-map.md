---
path: '/posts/async-foreach-map-in-js'
date: '2020-01-22'
title: 'Async forEach , map in Javascript'
---

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
