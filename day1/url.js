const url = require('url');

const myURL = new URL('https://example.com/product?id=123&category=shoes');
console.log(myURL.searchParams.get('id')); // => 123
