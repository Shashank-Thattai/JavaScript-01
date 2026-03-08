console.log(window)
console.log(window.screen)
console.log(window.navigator)
console.log(window.navigator.geolocation)
//console.log(window.navigator.geolocation.getCurrentPosition((data)=>{data}))

let facebook = () =>{
    location.href = "https://facebook.com"
}
let google =()=>{
    location.assign("https://www.google.com/?client=safari")
}

let instagram = () => {
    location.replace("https://www.instagram.com")
}
let reload = ()=>{
    location.reload()
}

console.log(innerHeight)
console.log(innerWidth)
console.log(outerHeight)
console.log(outerWidth)



console.log(history)


let fwd = () =>{
    history.forward()
}
let bwd = () =>{
    history.back()
}

console.log(history)