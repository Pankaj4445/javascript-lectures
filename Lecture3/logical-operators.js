let height = 0;
console.log(height || 10);


let h = 0;
console.log("h ?? 10", h ?? 10)

// AND operator
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false);// false

// AND operator returns first falsy value
console.log('1 && 0  ---> ', 1 && 0);    // 0, first falsy value will be returned
console.log('1 && 3  ---> ', 1 && 3);    // 3, all are truthy, then last value will be returned
console.log('null && 5  ---> ', null && 5); // null, since null is falsy
console.log('1 && 3 && null && 6  ---> ', 1 && 3 && null && 6);   // null


//NOT operator !
console.log('!true', !true);
console.log('!false', !false);
console.log('!!true', !!true);