function findMaxSlidingWindow(arr, k) {
  let res = [];
  let temp = [];

  for (let num of arr) {
    temp.push(num);

    if (temp.length === k) {
      res.push(Math.max(...temp));
      temp.shift();
    }
  }
  return res;
};