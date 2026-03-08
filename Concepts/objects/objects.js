let obj = {
    name:'vivak',
    age:26
}
console.log(obj)
//Object.seal(obj)
Object.freeze(obj)


let newObj = Object.assign(obj)
obj.age =35
obj.age =55

obj.place = "hyd"
console.log(newObj)

console.log(Object.keys(newObj))
console.log(Object.values(newObj))

console.log(Object.entries(newObj))
console.log(Object.hasOwn(obj,"name"))


