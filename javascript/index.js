const uri = 'http://localhost:3000/api/teddies';
const singleLink = './single-product.html?='

fetch(uri)
    .then((response) => response.json())
    .then((data) => createCards(data));

function createCards(items) {
    const container = document.getElementsById('cards-container');
    console.log(container);

    items.forEach(element => {
        const card = createCard(element);
        container.appendChild(card);
    });
}

/*
generate cards html should look like this

    <div class="col mb-4">
        <div class="card" id="card-obj">
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
    const card = document.createElement('div');

    const img = document.createElement('img');
    const name = document.createElement('h5');
    const price = document.createElement('p');
    const description = document.createElement('p')

    const link = document.createElement('a');

    let itemUrl = './single-product.html?=_id' + obj._id;

    card.classList.add('card');

    name.innerHTML = obj.name;
    price.innerText = obj.price;
    colors.innerText = obj.description

    img.setAttribute('src', obj.imageUrl);

}

var myObj = JSON.parse(myJSON);
document.getElementById("card-obj").innerHTML = myObj.name;

myJSON = JSON.stringify(myObj);

var teddyData = [
    {
        itemID: "1", 
        itemName: "Norbert", 
        itemDesc: "Avaliable in Tan, Chocolate, Black, White", 
        price: 29.00, 
        image: "images/teddy_1.jpg"
    },

    {
        itemID: "2", 
        itemName: "Arnold", 
        itemDesc: "Avaliable in Pale brown, Dark brown, White", 
        price: 39.00, 
        image: "images/teddy_2.jpg"
    },

    {
        itemID: "3", 
        itemName: "Lenny and Carl", 
        itemDesc: "Avaliable in Brown", 
        price: 59.00, 
        image: "images/teddy_3.jpg"
    },

    {
        itemID: "4", 
        itemName: "Gustav", 
        itemDesc: "Avaliable in Brown, Blue, Pink", 
        price: 45.00, 
        image: "images/teddy_4.jpg"
    },

    {
        itemID: "5", 
        itemName: "Garfunkel", 
        itemDesc: "Avaliable in Beige, Tan, Chocolate", 
        price: 55.00, 
        image: "images/teddy_5.jpg"
    },
]