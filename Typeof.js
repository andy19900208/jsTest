var a = 3;
console.log(typeof a);  //  number

var b = "Hello";
console.log(typeof b);  //  string

var c = {};
console.log(typeof c);  //  object

var d = [];
console.log(typeof d);  //  object
console.log(Object.prototype.toString.call(d)); //  [object Array]

var e = false;
console.log(typeof e);  //  boolean

function fun()
{
    this.name = 's';
}

console.log(typeof fun);  //  function

var _f = fun;
var ff = new fun();

console.log(typeof ff);  //  obj



