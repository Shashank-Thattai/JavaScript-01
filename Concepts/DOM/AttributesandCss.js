let p = document.createElement("p")
p.innerHTML = "i am a para tag"
document.body.appendChild(p);
console.log(p)


//Assigning the attributes

p.setAttribute("id","para");

console.log(p.getAttribute('id'))

p.removeAttribute("id")


//Apply CSS in JS

p.style.setProperty("color","red")

p.style.backgroundColor = 'green';

//why is the font-size not working
//p.style.fontSize = "32px"

p.style.cssText = " color:blue;font-size:32px;border:solid;border-radius:30%;text-align:center;border-top-color:red;border-bottom:dashed;padding: 21px 10px"

p.style.removeProperty('color')


