//call back function
function fun1(){
    console.log('fun1');

}
//callback function call as parameter
//higher order function
function fun2(cb){
    console.log('fun2');
    cb();
}

fun2(fun1);


function ask(question, yes, no){
  const answer = confirm(question);
  if(answer){
    yes();
  }
  else{
    no();
  }
}

function showOk(){
  console.log('Ok');
}

function showCancel(){
  console.log("Cancelled");
}

// ask("Do you wantto submit?",showOk, showCancel);
ask("Do you wantto submit?",
function(){ console.log("Ok");}, 
function(){console.log("Cancelled");})