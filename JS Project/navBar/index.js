let navContainer = document.querySelector('.container')

let navbar = document.createElement('nav')


navbar.innerHTML = `
<section id ="logo">
logo
<section>
<section id = "navigation">
<ul>
<li>
<a href = " ../homepage/index.html>Home</a>
</li>
<li>
<a href = " ../category/veg.html>veg</a>
</li>
<li>
<a href = " ../category/nonveg.html>NonVeg</a>
</li>
</ul>
</section>
<section>
<ul>
<li>
<a href = " ../cart/cart.html>cart</a>
</li>
<li>
<a href = " ../login/index.html>login</a>
</li>
<li>
<a href = " ../registration/index.html>Sign in</a>
</li>
</ul>
</section>

`;

navContainer.before(navbar)