function multiply(x, y){
  return x * y;
}


function curriedMultiply(x) {
  var multiply = function (y) {
    return x * y;
  }
  return multiply;
}

var mult3 = curriedMultiply(3);

console.log(mult3(3));//9
console.log(mult3(5));//15


function curriedFx(x) {
    
  var fx = function (f) {
    return f(x);
  }
  
  return fx;
}

var Fx7 = curriedFx(7);
console.log(Fx7((x)=>x*x))//49;
console.log(Fx7((x)=>x+x));//14

var Fx5 = curriedFx(5);
console.log(Fx5((x)=>x*x));//25
console.log(Fx5((x)=>x+x));//10


Fx7((x)=>{
    console.log(x + Fx5((x)=>x*x))//32
})
