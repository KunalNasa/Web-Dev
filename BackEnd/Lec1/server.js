console.log("hello");

// slugify - removes those char which are not allowed in computers
var slugify = require('slugify');
let a = slugify('some string'); // op -> some-string
console.log(a);

const b = slugify('some string', '_'); //o/p -> some_string
console.log(b);

const c = slugify('some st$#@&&ring', '_'); //o/p -> some_stdollar@andandring
console.log(c);
