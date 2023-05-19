const a = true;
const b = false;
console.log(a,b);
//object

const obj = {
    name : 'pankaj',
    age : 23,
    val1 : {
    a : true,
    b : false
    },
    0 : 'OK',
    true : 'No'
}
console.log(obj);
console.log(obj.name);
console.log(obj['name']);
console.log(obj.val1.a);
console.log(obj['0']);
console.log(typeof obj);

//null  type of null is object
const n = null;

//undefined type of undefined is undefined
let u ;