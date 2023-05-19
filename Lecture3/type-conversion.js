//convert string , number, boolean



//convert to string using String Function
let a = true;
a = String(a);
console.log(a);
console.log(typeof a);

console.log(String(null))
console.log(null);

console.log(undefined, typeof(undefined));
console.log(undefined, typeof String(undefined));

//convert to number using Number Function
console.log('10'+'20');
console.log('10'*'20');
console.log(true, Number(true));
console.log(null, Number(null));
console.log(undefined, Number(undefined));

//conver to boolean

console.log("-----------------------boolean conversion---------------");
console.log(1, Boolean(1));
console.log("abc", Boolean("abc"));
console.log("", Boolean(""));
console.log(" ", Boolean(" "));