var v1 = 1 + '2';
console.log(v1);

var v2 = 1 + 2 + '3';
console.log(v2);

var v3 = '1' + 2 + 3;
console.log(v3);

var v4;
console.log(v4 || 'd');
v4 = null;
console.log(v4 || 'd');
v4 = '';
console.log(v4 || 'd');
v4 = v4 || 'v4';
console.log(v4 || 'd');



var obj = {
    a : 'a',
    f : function(){ 
        console.log('f'); 
        return 'F';
    }
}
console.log(JSON.stringify(obj));

console.log(obj.f());

