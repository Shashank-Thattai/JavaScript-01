//prompt


//let firstName = prompt("Enter your first name")
//let lastName = prompt("Enter your last name")

//console.log(firstName + " " + lastName)


//confirm

 /*let message = confirm("are you sure you want to delete the message");

 console.log(message)

 if(message)
 {
    alert("image deleted")
    
 }else
 {
    alert("thank you")
 }*/

 let a;

 let openPage = ()=>{
    a = open('./bwd.html','_target','height:300px,width:300px')
 }
 let closePage = () => {
    a.close();
 }


 //Timeout
 //let count = 0 ;
 //et t = setTimeout(()=>{console.log(++count)},2000)

 //console.log(t)

 //Interval

 //setInterval(()=>{console.log(++count)},1000)

/*let count = 0
 let Interval = setInterval(()=>{
    if(count < 2)
    {
        clearInterval(Interval)
        console.log("cleared")
    }if(count >= 5)
    {
        clearInterval(Interval)
        console.log("cleared")
    }
    console.log(++count)
 },1000)*/

 let count = 0;
let interval = setInterval(() => {
  if (count < 2) {
    console.log("Too low:", count);
  }

  if (count >= 5) {
    clearInterval(interval);
    console.log("cleared");
  }

  console.log(++count);
}, 1000);


 

