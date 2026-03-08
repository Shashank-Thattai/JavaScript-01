let form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let formData = new FormData(form)
  console.log(formData.get('email'))
  console.log(formData.get('password'))
  validation(formData.get('email'),formData.get("password"))
})


let validation = async(username,password)=>{
  let response = await fetch('https://localhost:3000/users')
  let usersData = await response.json();


  let user = usersData.filter(value => value.email == username&&value.password == password);
  if(user.length == 1)
  {
    alert('login successfull')
    location.href = "../homepage/index.html";
  }else{
    alert('login failed Try again')
  }
};