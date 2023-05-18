console.log("Variables & Scopes")

// let a = 10;
// var b = 20;
// const c = 30;

// console.log(a, b, c);
let a = 10;

{
    var b = 20;// variables declare with var are not block scope
    let c = 30;//block scopes
}

console.log('b', b);
// console.log('c', c);
if(true){
    //block scope
}

for( let i=0; i<5; i++){
    console.log(i)
}

function func1(){
    var f = 45;
    
}

func1()