

function a1(){
    var myVar = 2;
    console.log('a1:' +myVar);
    a2();
    a3();
}
function a2(){
    var myVar;
    console.log('a2:' +myVar);
}
function a3(){
    console.log('a3:' + myVar);
}

function b1(){
    var myVar = 3;
    console.log('b1:' + myVar);
    b2();

    function b2(){
        console.log('b2:' + myVar);
        b3();
        function b3(){
            console.log('b3:' + myVar);
        }
    }
}


var myVar = 1;
console.log(myVar);
a1();
a3();
b1();