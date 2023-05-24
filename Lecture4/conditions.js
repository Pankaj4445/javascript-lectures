const condition = 5 < 6;


//if condition
if(condition){
    console.log('5 is less than 6');
}

time = 17;
if (time<12){
    console.log("good morning")
}else if(time>=12 && time<17){
    console.log("good afternoon")
}else{
    console.log('Good night')
};

//ternary operator
let greet = time<12 ? "Good Morning" : "good evening";
console.log(greet);

// switch operator
let num = 3;
switch  (num){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("Invalid statement");
    
    
}