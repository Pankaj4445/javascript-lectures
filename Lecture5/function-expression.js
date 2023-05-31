function sayshi(){
    console.log("hi");
}
sayshi()

function greet(){
    console.log("Good morning")
}
greet()
let welcome;
let age = prompt("Enter your age: ");
if (age>0 && age<18){
    welcome = function(){
    console.log("You are minor");}
}
else if(age>=18){
    welcome = function(){
        console.log("welcome ");
    }
}
else{
    welcome = function(){
        console.log("Enter valid age");
    }
}
welcome()