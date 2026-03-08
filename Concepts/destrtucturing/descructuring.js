//Array Destucturing


let arr = ["clothes", ["crime","love Stories","adventure"],"bike", "vessels","laptop","washing machine","glasses"]
//let [clothes,books,bike,vessels,laptop,washingmachine,glasses] = arr;
//let[a,b,c,d,e,f,g] = arr;
//console.log(a)
//console.log(g)
;
//let [a,[b,c,d],...rest] =arr;

//console.log(d)
//console.log(a)


//fix this
let [...wshing] = arr
console.log(wshing)


//console.log(clothes)
//console.log(bike)


//Object Desturcturing
let details = {
    name:"dinga",
    age:23,
    place:"baffolo",
    food:"cheese",
    location:
    {
        state:"california",
        city:"santa barbara"
    }

}
console.log(details)
let {name, age, place, food ,location:{state}} = details;
console.log(name+age+place+food)
console.log(state)





