const array = [1,2,3,4,5];
console.log(array);
console.log(array[2]);
array[4]= 40;
console.log(array);

const arr1 = [1,2,"ABC", [4,5], {"A":"hello!", "B":"good bye"}, 10];
console.log(arr1);
console.log("arr1.lenght", arr1.length);
console.log("!tostring", arr1);
console.log("arr.tostring", arr1.toString());


const arr2 = [1,2,3,4,5];
console.log(arr2);
arr2.push(6);
console.log("after push 6", arr2);
arr2.push(7,8);
console.log("after push 7,8", arr2);
arr2.pop()
console.log("after pop",arr2);