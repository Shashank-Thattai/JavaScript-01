window.addEventListener("load",()=>{
    document.body.style.backgroundColor = "red"
})

let section = document.querySelector("section")
let article = document.querySelector("article")

window.addEventListener("load",()=>{
    document.body.style.backgroundColor = 'blue'
    section.style.transform = "translateX(50px)"
})
window.addEventListener("scroll",()=>{
    article.style.transform = "translateY(100px)"
})

window.addEventListener("resize",()=>{
p.style.color = "white"
})