
//Named functions





function demo(){
    console.log("i am a demo function");
}
demo()

//Anonymous function




let Anonymous = function(){console.log("i am an anonymous function")}
Anonymous();
//why is return not working here when i try to return a*b
let x =function(a,b){console.log(a*b)}
x(5,5);
//how can i call this function below
let y =function(){let z =function(){console.log("i am a nested anonymous funciton")}}
y();

//IIFE functions
//()();
//wrapped in parenthesis





(
    function(){
        console.log("I am a iife function")
    }
)();

(
    function(a,b){
        console.log(a/b)
    }
)(10,5);


//Arrow functions

/*Normally the funtion looks like this

function demo1(){
    console.log("I am a demo function")
}
demo1()


but with the arrow. it looks like this */

let demo9 = ()=>{console.log("I am a demo function")}
demo9()

//if i have only one like of execution at the time there is no need to ise the curly brackets

let demo10 =() =>console.log("I am a one line arrow function")
demo10()

//if i dont have any parameters to pass then theres no need to use the parenthesis

let demo11 =() => console.log("I am a no parameter arror funtion")
demo11()

//in the arrow function there are two types of returns

//Implicit returns
//Explicit returns


//why is this function undefined?
let demo12 =() =>{return"I a, a demo12 function"}
console.log(demo12())

//what is th$ sign doing
let demo13 = $ => {return "I am a demo13 function"}
console.log(demo13())

//If i have only one parameter to pass then there is no need to use the parenthesis

let demo14 =name => console.log(name)
demo14("Shashank")


function prime(num)
{
    let count =0;
    for(let i = 1;i<=num;i++)
    {
        if(num%i===0)
        {
            count++;
        }
    }
    if(count ===2)
    {
        console.log(num + " Its a prime number")
    }
    else{
        console.log(num + "its not a prime number")
    }
}
prime(20)
