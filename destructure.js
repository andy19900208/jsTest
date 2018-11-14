const arr = [1, 2, 3];

const [first, second, third, forth] = arr;

console.log(first);
console.log(second);
console.log(third);
console.log(forth);

const obj = {
    a:1,
    b:2,
    c:3,

};

const {a:aa = 0,} = obj;

//console.log(a);
console.log(aa);

