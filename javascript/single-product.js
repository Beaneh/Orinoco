//extract id from url query parameters

const QueryString = window.location.search; 
const urlParams = new URLSearchParams(QueryString);
const idProduct = urlParams.get('id')

//use idProduct to retrive product info from backend
//url format for requesting details is http://localhost:3000/api/teddies/{idProduct}

const uri = 'http://localhost:3000/api/teddies/' + idProduct

fetch(uri)
    .then((response) => response.json())
    .then((data) => createCard(data));

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

    return(cardContainer)
}

console.log(createCard)