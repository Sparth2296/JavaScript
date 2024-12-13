async function getData() {
  try {
    let res = await fetch("db.json");

    let a = await res.json();

    let b = a.product;

    console.log(b);

    b.forEach((val) => {
      // console.log(element.img);
      let append = document.querySelector(".wrapper");
      append.innerHTML += `
      <div class="card-product">
<div class="product-img">
<img src="${val.img}">
</div>
<div class="product-info">
<div class="product-text">
<h1>${val.title}</h1>
<h2>${val.subtitle}</h2>
<p>${val.dtls}</p>
</div>
<div class="product-price-btn">
<p><span> $${val.price}</span></p>
<button type="button" id="btn" onclick="resiveData('${val.img}','${val.title}','${val.subtitle}','${val.dtls}','${val.price}')">Add to Card</button>
</div>
</div>
</div>
`;
    });
  } catch (e) { }
}

let cart = [];
let count = 0;

function resiveData(image, title,subtitle,dtls,price) {
  let obj = {
    image,
    title,
    subtitle,
    dtls,
    price,
  };

  cart.push(obj);

  console.log(cart);

  let myCart = JSON.stringify(cart);

  localStorage.setItem("cart", myCart);

  

  count+=1;

  let divCount = document.querySelector('#count');
  divCount.textContent = count

  console.log();
  
}
getData();

// to get localStorage

let add = localStorage.getItem("cart");

let object = JSON.parse(add);

console.log(object);


let cartWrapper = document.querySelector(".container-of-cart");
let cardOfCart = document.querySelector(".cart-wrapper");
object.forEach((val) => {
  
  cardOfCart.innerHTML += `

  
  
  <div class="line-of-card">
  <div class="cart-img">
  <img src="${val.image}" alt="">
  </div>
  <div class="cart-intro">
  <h1>${val.title}</h1>
  <h2>${val.subtitle}</h2>
  <h3>${val.price}</h3>
  </div>
  <div class="del-cart" onclick="detele()">
  <i class="fa-solid fa-trash"></i>
  <button>Buy Now</button>
  </div>
  </div>
  </div>
  
  `;

});

let countBtn= document.querySelector('.count');
let avoJa = 0;
function tranforms(){
  avoJa++;
  if(avoJa == 1){
    cartWrapper.style.transform='translateX(0px)';
  }else if(avoJa == 2){
    cartWrapper.style.transform='translateX(800px)';
    avoJa = 0;

  }
}
let dele = 0;
function detele() {
  dele++;

  if(dele == 1){
    cardOfCart.style.display='none';
    dele=0;
  }

}


