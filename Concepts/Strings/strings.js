/*let str ="shashankaeiou";
str.split("")
let count = 0;
for(let i = 0;i<str.length;i++)
{
    if(str[i].includes("a"))
    {
        count++;
    }
    else if(str[i].includes("e"))
    {
        count++
    }
    else if(str[i].includes("i"))
    {
        count++
    }
    else if(str[i].includes("o"))
    {
        count++
    }
    else if(str[i].includes("u"))
    {
        count++
    }
}console.log(count)

let str1 ="shashankkka"

let s =str1.split("").map(value => {
    let count = 0;
    if(value.includes("a"))
    {
        count++;
    }else if(value.includes("e"))
    {
        count++;
    }else if(value.includes("i"))
    {
        count++;
    }else if(value.includes("o"))
    {
        count++;
    }else if(value.includes("u"))
    {
        count++;
    }
    
    return count;
})

console.log(s)*/


let str1 = "shashank";

let totalCount = str1.split("").filter(ch => "aeiou".includes(ch)).length;

console.log(totalCount); 
