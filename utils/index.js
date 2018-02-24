'use strict';

const getRandomNum = (start = 2, end = 5) => {
  return Math.random().toString().slice(start, end);
};
module.exports = {
  getRandomNum,
};
