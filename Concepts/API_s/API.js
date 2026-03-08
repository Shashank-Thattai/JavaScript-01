console.log("fetch starts here")

let products =()=>{
    let data = fetch('https://fakestoreapi.com/products')
    console.log(data);
    return data;
    }
    products()

    products()
  .then((response) => response.json())  // call .json(), not just log it
  .then((data) => console.log(data))    // now you’ll see the actual products


//products().then((value)=>console.log(value))

//products().then((value)=>console.log(value.json()))

//products().then((value)=>value.json()).then(products=>{console.log(products)})

products().then((value)=>value.json()).then(products=>{products.map((productData)=>{
    //creating the data
    let title = document.createElement('p')
    let description = document.createElement('p')
    let container = document.createElement('article')

    //assigning the values
    title.innerHTML = `title : ${productData.title}`
    description.innerHTML = `description : ${productData.description}`

    //setting attributes
    container.setAttribute("class","container")

    //appending the values

    container.append(title,description)
    
    
    document.body.append(container)
}
    
    )})


