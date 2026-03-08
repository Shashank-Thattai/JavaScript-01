let form  = document.querySelector("form")
let email = document.querySelector("#email")
let name = document.querySelector("#name")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(email.value)
    console.log(name.value)
})

//email.addEventListener("input",()=>{
//console.log(email.value)
//})

email.addEventListener("focus",()=>{
    email.style.backgroundColor ="red"
})

email.addEventListener("blur",()=>{
    email.style.backgroundColor = "white"
})

email.addEventListener("change",()=>{
    console.log(email.value)
})