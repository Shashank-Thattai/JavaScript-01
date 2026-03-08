
//higher order function
let cal =(x,y,operation) =>{
    console.log(operation)
    operation(x,y)
}

//call back function
let add =(a,b)=> console.log(a+b)
let sub =(a,b)=> console.log(a-b)
let mult =(a,b)=> console.log(a*b)
let div =(a,b)=> console.log(a/b)
cal(10,20,add)
cal(20,10,sub)
cal(5,10,mult)
cal(10,5,div)

//nested function


//1st way


/*
let balance =5000;
function bank(x)
{
    function deposit(amount)
    {
        balance+=amount;
        console.log(balance)
    }
    deposit(x)
}
bank(45000)
bank(45000)
*/

//2nd way

let balance = 5000;

function bank(){

return function deposit(amount){
    balance+=amount
    console.log(balance)
}
}
/*
let deposit =bank()
console.log(deposit)
deposit(45000)
deposit(45000)
deposit(45000)
*/
bank()(45000)


//Generator funciton


 /*function*id()
{
    yield 1;
    yield 2;
    yield 3;

}
let numbers = id();
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)*/

function*id(){
    let count =1;
    while(true){
        yield count++
    }
}
let numbers = id();
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)







