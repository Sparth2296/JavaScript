const add = localStorage.getItem("cart");

let object = JSON.parse(add);

console.log(object);

object.forEach((val) => {

  let append = document.querySelector(".wrapper");
  append.innerHTML += `
   <div class="card-product">
<div class="product-img">
<img src="${val.image}" height="420" width="327">
</div>
<div class="product-info">
<div class="clode"></div>
<div class="product-text">
<h1>${val.title}</h1>
<h2>${val.subtitle}</h2>
<p>${val.dtls}</p>
</div>
<div class="product-price-btn">
<p><span> $${val.price}</span></p>
<button type="button" id="btn">buy now</button>
</div>
</div>
</div>
`;

});
