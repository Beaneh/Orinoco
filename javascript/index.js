const uri = 'http://localhost:3000/api/teddies';
const singleLink = './single-product.html?='

fetch(uri)
    .then((response) => response.json())
    .then((data) => createCards(data));

function createCards(array) {
    const container = document.getElementsById('cards-container');
    console.log(container);

    data.forEach(element => {
        const card = createCards(element);
        container.appendChild(card);
    });
}

function createCards(obj) {
    const card = document.createElement('div');

    const img = document.createElement('img');
    const name = document.createElement('h2');
    const price = document.createElement('p');

    const link = document.createElement('a');

    let anotherLink = './single-product.html?=_id' + obj._id;

    card.classList.add('card');

    name.innerHTML = obj.name;
    price.innerText = obj.price;

    img.setAttribute('src', obj.imageUrl);

}