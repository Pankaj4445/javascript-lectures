//function declaration

function sayhi(){
    console.log("hi!!");
    console.log("everyone");
}
// sayhi()
greet = sayhi
greet()

function sum(num1, num2){
    console.log(num1+num2);
}
sum(10,20);



function square(num1){
   return num1**2;
}
const value = square(4)
console.log("square", value)

function area(radius, precision=2){
    return (Math.PI*radius**2).toFixed(precision);
}
console.log("Area of circle = ", area(5,3));
console.log("Area of circle = ", area(5,undefined));