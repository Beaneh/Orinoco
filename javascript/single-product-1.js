const uri = 'http://localhost:3000/api/teddies';
const singleLink = './single-product.html?id=' + obj._id;

document.getElementById('singleProduct');

let url = window.location.href;
let newURL = new URL(url);
let id = newURL.searchParams.get('singleProduct');

function loadDoc() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
       callback(xmlHttp.responseText);
    }
    xmlHttp.open('GET', url, true);
    xmlHttp.send(JSON);
  }

document.body.onload = createCard;

function createCard(obj) {
  const cardContainer =  document.createElement('div');
  cardContainer.classList.add('col-md-7')

  const img = document.createElement('img');
  img.setAttribute('src', obj.imageUrl);
  img.setAttribute('alt', obj.name);
  cardContainer.append(img)

  const card = document.createElement('div');
  card.classList.add('col-md-5');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.append(cardBody)

  const name = document.createElement('h5');
  name.classList.add('card-title');
  name.innerHTML = obj.name;
  cardBody.append(name)

  const description = document.createElement('p')
  description.classList.add('obj-description');
  description.innerText = obj.description;
  cardBody.append(description)

  const price = document.createElement('p');
  price.classList.add('card-text');
  const dollarPrice = obj.price / 100;
  price.innerText = '$' + dollarPrice;
  cardBody.append(price)

  const colors = document.createElement('p')
  colors.classList.add('colors');
  colors.innerText = obj.colors
  cardBody.append(colors)

  const link = document.createElement('a');

  let itemUrl = './single-product.html?id=' + obj._id;
  link.setAttribute('href', itemUrl);
  link.classList.add('btn', 'btn-primary', 'stretched-link');
  link.innerText = 'View Item'
  cardBody.append(link)

  return(cardContainer)
}


// $(document).ready(function(){
//     $(".dropdown").on("hide.bs.dropdown", function(){
//       $(".btn").html('Colors <span class="caret"></span>');
//     });
//     $(".dropdown").on("show.bs.dropdown", function(){
//       $(".btn").html('Colors <span class="caret caret-up"></span>');
//     });
//   });

