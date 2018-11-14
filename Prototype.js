function sum(a,b){
  this.a = a;
  this.b = b;
}

sum.prototype.getresult = function(){
  return this.a + this.b;
};
sum.prototype.log = function(){
  console.log(`${this.a} + ${this.b} = ${this.getresult()}`);
};


var thirteen = new sum(5,8);
thirteen.log();
var twelve = new sum(6,6);
twelve.log();

console.log();
console.log(thirteen.__proto__);
console.log(thirteen.prototype);

console.log();
console.log(sum.__proto__);
console.log(sum.prototype);

console.log();
console.log(typeof(twelve.__proto__));

//console.log(thirteen.__proto__ === sum.__proto__); // true

