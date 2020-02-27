//url.parse method splits a web address into readable parts

const url = require('url');
const address = 'https://developerkennie/index.html?name=kennie&sname=lawal';
const q = url.parse(address,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q);//returns the complete url object
console.log(q.query.name);