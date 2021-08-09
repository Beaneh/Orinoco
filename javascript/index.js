const uri = 'http://localhost:3000/api/teddies';
const singleLink = './single-product.html?='

fetch(uri)
    .then((response) => response.json())
    .then((data) => createCards(data));

function createCards(items) {
    const container = document.getElementById('cards-container');
    console.log(container);

    items.forEach(element => {
        const card = createCard(element);
        container.append(card);
    });
}

/*
generate cards html should look like this

    <div class="col mb-4">
        <div class="card">
            <img src="{obj.imageUrl}" class="card-img-top" alt="{obj.name}">
            <div class="card-body">
                <h5 class="card-title">{obj.name}</h5>
                <p class="card-text">Price: ${obj.price}</p>
                <p class="card-text">{obj.description}</p>
                <a href="{itemUrl}" class="btn btn-primary stretched-link">View item</a>
            </div>
        </div>
    </div>
*/

function createCard(obj) {
    const cardContainer =  document.createElement('div');
    cardContainer.classList.add('col', 'mb-4')

    const card = document.createElement('div');
    card.classList.add('card');
    cardContainer.append(card)


    const img = document.createElement('img');
    img.setAttribute('src', obj.imageUrl);
    img.setAttribute('alt', obj.name);
    card.append(img)

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.append(cardBody)

    const name = document.createElement('h5');
    name.classList.add('card-title');
    name.innerHTML = obj.name;
    cardBody.append(name)

    const price = document.createElement('p');
    price.classList.add('card-text');
    const dollarPrice = obj.price / 100;
    price.innerText = '$' + dollarPrice;
    cardBody.append(price)

    const colors = document.createElement('p')
    colors.classList.add('colors');
    colors.innerText = obj.colors
    cardBody.append(colors)

    const description = document.createElement('p')
    description.classList.add('obj-description');
    description.innerText = obj.description;
    cardBody.append(description)

    const link = document.createElement('a');

    let itemUrl = './single-product.html?id=' + obj._id;
    link.setAttribute('href', itemUrl);
    link.classList.add('btn', 'btn-primary', 'stretched-link');
    link.innerText = 'View Item'
    cardBody.append(link)

    return(cardContainer)
}
