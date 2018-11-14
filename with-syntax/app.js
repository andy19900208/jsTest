function func() {
    console.time("func");
    var obj = {
        a: [1, 2, 3]
    };
    for (var i = 0; i < 100000; i++) {
        var v = obj.a[0];
    }
    console.timeEnd("func");//0.847ms
}
func();

function funcWith() {
    console.time("funcWith");
    var obj = {
        a: [1, 2, 3]
    };
    //var obj2 = { x: 2 };
    with (obj) {
        //console.log(a[2]);
        for (var i = 0; i < 100000; i++) {
            var v = a[0];
        }
    }
    console.timeEnd("funcWith");//84.808ms
}
funcWith();