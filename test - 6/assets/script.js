let form = document.getElementById("form");

let submit = document.querySelector(".submit");

let input = document.querySelectorAll("input");

submit.addEventListener("click", (event) => {
  
  event.preventDefault();
  createCards()
});

function createCards() {
  
  let container = document.getElementById("main-container");
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const imageDiv = document.createElement("div");
  imageDiv.className="images-of-card";
  const img = document.createElement("img");
  img.src = input[1].value;
  img.alt = "product";
  imageDiv.appendChild(img);

  let detailsDiv = document.createElement("div");
  detailsDiv.className = "dtl-of-card";


  let h2 = document.createElement("h2");
  h2.textContent = input[0].value;
  detailsDiv.appendChild(h2);

  let p = document.createElement("p");
  p.textContent = input[2].value;
  detailsDiv.appendChild(p);

  let price = document.createElement('strong');
  price.textContent = input[3].value
  detailsDiv.appendChild(price);
  

  let a = document.createElement('a');
  a.href = input[4].value;
  detailsDiv.appendChild(a);


  let button = document.createElement("button");
  button.className = "add";
  button.textContent = "CLICK ME";
  a.appendChild(button);



  cardDiv.appendChild(imageDiv);
  cardDiv.appendChild(detailsDiv);
  container.appendChild(cardDiv);

  console.log(val[i].value);

 
}

