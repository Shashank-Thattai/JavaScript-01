let arr =['hello','bye','goodbye','hi']
let evenLength = arr.filter(value =>{
     return value.length%2===0
})
console.log(evenLength)
let number = evenLength.reduce((value,total)=>{
    total+=value.length;
    return total

})
console.log(number)


let arr = ['hello', 'bye', 'goodbye', 'hi'];

let evenLength = arr.filter(value => {
  return value.length % 2 === 0;
});

console.log(evenLength);

let number = evenLength.reduce((total, value) => {
  return total + value.length;
}, 0);

console.log(number);


