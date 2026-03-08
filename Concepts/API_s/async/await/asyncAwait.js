let product = async() =>{
    try{
        let response = await fetch('https://fakestoreapi.com/products')
        console.log(response)
        let finalResponse = await response.json()
        console.log(finalResponse)
        finalResponse.map(value =>{

            let title = document.createElement('p')
            let description = document.createElement('p')
            let container = document.createElement('article')

            title.innerHTML = `Title:${value.title}`
            description.innerHTML = `Description:${value.description}`

            container.append(title,description)

            document.body.append(container)



        })
        
        
    }catch (error)
    {
        console.log('error')
    }
}
product()