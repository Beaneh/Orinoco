const uri = 'http://localhost:3000/api/teddies';

const displaySingleProduct = document.getElementById('singleProduct');

let url = window.location.href;
let newURL = new URL(url);
let id = newURL.searchParams.get('productId');
if(id!='') {
    displaySingleProduct(id);
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('productId').innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", cart.html, true);
    xhttp.setRequestHeader('Shopping-Cart', 'application/json');
    xhttp.send('myObj');
  }


fetch(uri)
.then((response) => response.json())
.then((data) => createCard(data));

function createCard(items) {
  const container = document.getElementById('singleProduct');
  console.log(container);

  items.forEach(element => {
      const card = createCard(element);
      container.append(card);
  });
}

function createCard(obj) {
    const cardContainer =  document.createElement('div');
    cardContainer.classList.add('col-md-7')

    const img = document.createElement('img');
    img.setAttribute('src', obj.imageUrl);
    img.setAttribute('alt', obj.name);
    cardContainer.append(img)

    const cardContainer =  document.createElement('div');
    cardContainer.classList.add('col-md-5')

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardContainer.append(cardBody)

    const name = document.createElement('h5');
    name.classList.add('card-title');
    name.innerHTML = obj.name;
    cardBody.append(name)

    const price = document.createElement('p');
    price.classList.add('card-text');
    price.innerText = obj.price;
    cardBody.append(price)

    const description = document.createElement('p')
    description.classList.add('obj-description');
    description.innerText = obj.description;
    cardBody.append(description)

    const colors = document.createElement('p')
    colors.classList.add('colors');
    colors.innerText = obj.colors
    cardBody.append(colors)

    // const link = document.createElement('a');

    // let itemUrl = './single-product.html?id=' + obj._id;
    // link.setAttribute('href', itemUrl);
    // link.classList.add('btn', 'btn-primary', 'stretched-link');
    // link.innerText = 'View Item'
    // cardBody.append(link)

    return(cardContainer)
}

$(document).ready(function(){
    $(".dropdown").on("hide.bs.dropdown", function(){
      $(".btn").html('Colors <span class="caret"></span>');
    });
    $(".dropdown").on("show.bs.dropdown", function(){
      $(".btn").html('Colors <span class="caret caret-up"></span>');
    });
  });

