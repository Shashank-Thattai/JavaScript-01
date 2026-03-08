//id

let section1 =document.getElementById('section1')
console.log(section1)


//className


let classData = document.getElementsByClassName("tag")
console.log(classData)


//tagName


let tagName = document.getElementsByTagName('section')
console.log(tagName)
for(i of tagName)
{
    console.log(i)
}

//querySeclector

let article1 = document.querySelector('#article1')
console.log(article1)

let qclass = document.querySelector('.tag')
console.log(qclass)

let tq = document.querySelector('article')
console.log(tq)

//querySelectorAll

let article = document.querySelectorAll('article')
console.log(article)

//chevck this one
article.forEach(value => {if(value.innerHTML === "I am an artcile tag2"){value.innerHTML = 'none'}})



//creating elements

let  p = document.createElement('p')
let  p1 = document.createElement('p')

console.log(p)
console.log(p1)


p.textContent = "i am a para tag"
p1.innerHTML = "<i>i am a para tag<i>"

console.log(p)

//append
document.body.append(p)
document.body.append(p1)

//remove
document.body.removeChild(p)

//replace
document.body.replaceChild(p1,p)