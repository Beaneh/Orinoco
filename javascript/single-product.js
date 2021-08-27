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

    /*
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
    </div>
    </div>

    */

    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');
    const dropdownButton = document.createElement('button');
    dropdownButton.classList.add('btn', 'btn-primary', 'dropdown-toggle');
    dropdownButton.setAttribute('type', 'button');
    dropdownButton.setAttribute('data-toggle', 'dropdown');
    dropdownButton.setAttribute('id', 'dropdownMenuButton')
    dropdownButton.innerText = 'Color';
    dropdown.append(dropdownButton)

    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
    dropdownMenu.setAttribute('aria-labelledby', 'dropdownMenuButton');
    dropdown.append(dropdownMenu)


    const createlistItem = color => {
        const link = document.createElement('a');
        link.classList.add('dropdown-item');
        link.setAttribute('href', '#');
        link.innerText = color

        return link
    }
    
    obj.colors.forEach(color => {
        const listItem = createlistItem(color);
        dropdownMenu.append(listItem);
    });

    cardBody.append(dropdown)

    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group', 'pl-3');
    cardBody.append(formGroup)

    const qtytitle = document.createElement('p');
    qtytitle.classList.add('medium', 'pt-2', 'mt-4');
    qtytitle.innerText = 'Quantity';
    formGroup.append(qtytitle)

    const quantity = document.createElement('input');
    quantity.classList.add('quantity');
    quantity.setAttribute('min', '0');
    quantity.setAttribute('name', 'quantity');
    quantity.setAttribute('value', '1');
    quantity.setAttribute('type', 'number');
    formGroup.append(quantity)

    // <p class="p-3">
    //     <button class="btn btn-round btn-danger" type="button" onclick="loadDoc()"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
    // </p>

    const cart = document.createElement('p');
    cart.classList.add('p-3');
    const cartbtn = document.createElement('button');
    cartbtn.classList.add('btn', 'btn-round', 'btn-danger');
    cartbtn.setAttribute('type', 'button');
    cartbtn.setAttribute('onclick', 'loadDoc()');
    cart.append(cartbtn)

    const cartLogo = document.createElement('i');
    cartLogo.classList.add('fa', 'fa-shopping-cart');
    cartbtn.innerHTML = cartLogo + 'Add to Cart';
    cartbtn.append(cartLogo)

    cardBody.append(cart)


    cardContainer.append(card)


    // return(cardContainer)
}
