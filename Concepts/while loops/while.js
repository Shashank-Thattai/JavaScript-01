/*let num =100;
let i=0;

while(i<=100)
{
    console.log(i);
    i+=3;
}
while(i<=100)
{
    if(i%3===0)
    {
        console.log(i);
    }
    i++;
}*/

let i =1;
let count = 0;
let num =23;
while(i<=num)
{
   if(num%i===0)
   {
    count++
   }
   i++;
}
if(count===2)
{
    console.log("prime number")
}else{
    console.log("not a prime number")
}
