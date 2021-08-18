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

    const cardContainer =  document.getElementById('singleProduct');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('col-md-7')


    const img = document.createElement('img');
    img.classList.add('card-img')
    img.setAttribute('src', obj.imageUrl);
    img.setAttribute('alt', obj.name);
    imgContainer.append(img)
    
    cardContainer.append(imgContainer)

    const card = document.createElement('div');
    card.classList.add('col-md-5');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.append(cardBody)

    const name = document.createElement('h5');
    name.classList.add('card-title');
    name.innerHTML = obj.name;
    cardBody.append(name)

    const description = document.createElement('p');
    description.classList.add('obj-description');
    description.innerText = obj.description;
    cardBody.append(description)

    const price = document.createElement('p');
    price.classList.add('card-text');
    const dollarPrice = obj.price / 100;
    price.innerText = '$' + dollarPrice;
    cardBody.append(price)

    const colors = document.createElement('div');
    colors.classList.add('colors');
    colors.setAttribute('id', 'color-dropdown');
    const dropdownButton = document.createElement('button');
    dropdownButton.classList.add('btn', 'btn-primary', 'dropdown-toggle');
    dropdownButton.setAttribute('type', 'button');
    dropdownButton.setAttribute('data-toggle', 'dropdown');
    dropdownButton.innerHTML = 'Color <span class="caret"></span>';
    colors.append(dropdownButton)

    const dropdownMenu = document.createElement('ul')
    dropdownMenu.classList.add('dropdown-menu')

    // obj.colors.forEach(color => {
    //     const listItem = createlistItem(color);
    //     dropdownMenu.append(listItem);
    // });

    cardBody.append(colors)

    cardContainer.append(card)

    // const createlistItem = color => {
    //     const item = document.createElement('li');
    //     const link = document.createElement('a');
    //     // <li><a href="#">Tan</a></li>
    // }

    // return(cardContainer)
}
console.log(createCard)