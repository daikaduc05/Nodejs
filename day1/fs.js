const fs = require('fs');

// Ghi file
fs.writeFileSync('hello.txt', 'Xin chào Node.js');

// Đọc file
const data = fs.readFileSync('hello.txt', 'utf8');
console.log(data); // => Xin chào Node.js
