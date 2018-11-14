function f(a) {
    var count = 1;
    function r() {
        console.log(`${a} : ${count++}`);
    }
    return r;
}

var a = f('a');
var b = f('b');

a();
a();
a();

b();
b();
b();

a();
b();



var obj = [];

for(var i = 0; i < 3; i++){

    obj.push(function(){
        console.log(i)
    });
}

for(var i = 0; i < 3; i++){

    obj.push(show(i));
}
function show(i){
    return function(){
        console.log(i)
    }
}

for(let i = 0; i < 3; i++){

    obj.push(function(){
        console.log(i)
    });
}


obj.forEach((e)=>{
   e();
});