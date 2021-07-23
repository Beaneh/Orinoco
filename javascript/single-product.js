const uri = 'http://localhost:3000/api/teddies';

const teddyContainer = document.querySelector('#single-product');

const name = ['norbert'];

var teddyData = [
    {
        itemID: "1", 
        itemName: "Norbert", 
        itemDesc: "Avaliable in Tan, Chocolate, Black, White", 
        price: 29.00, 
        image: "images/teddy_1.jpg"
    },
 ];

 let product = [
     {name: "norbert" price: 29.00 itemDesc:"Avaliable in Tan, Chocolate, Black, White"}
 ]

 let result = JSON.parse(response);
 result.teddyData[0].itemName => norbert

 