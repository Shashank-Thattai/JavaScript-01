let h1 = document.querySelector("h1");

let colorChange = () => {
    h1.style.color = "red";
}

let colorChange2 =() =>{
    h1.style.color = "blue";
}

h1.ondblclick = colorChange2;

h1.addEventListener("mouseenter", () =>{
    h1.style.backgroundColor = "green";
})
h1.addEventListener("mouseleave", () =>{
    h1.style.backgroundColor = "white";
})

h1.addEventListener("mouseover",()=>{
    h1.style.backgroundColor="green";
})