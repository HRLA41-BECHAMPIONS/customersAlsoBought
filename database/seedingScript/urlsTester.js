const urls = require('./urlFetchers.js');

console.log(urls);


const randomUrl = () => {
  return urls[Math.floor(Math.random() * urls.length)];
  // return Math.random*urls.length;
}
console.log(randomUrl());