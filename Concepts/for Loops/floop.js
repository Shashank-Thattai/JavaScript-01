/*let num =23;
let count =0;
for(let i=1;i<=23;i++)
{
    if(num%i===0)
    {
        count++;
    }
    if(count===2)
    {
        console.log("prime number")
    }else{
        console.log("not a prime number")
    }
}*/

for(let i=1;i<=100;i++)
{
    let count=0;
    for(let j =1;j<=i;j++)
    {
        
    
    if(i%j===0)
        {count++}
    }
    if(count===2)
    {
        console.log(i+ "is prime")
}else{i+"not prime"}
}
   


