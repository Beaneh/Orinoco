const uri = 'http://localhost:3000/api/teddies';

document.getElementById("singleProduct");

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
        document.getElementById("singleProduct").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "Your Rest URL Here", true);
    xhttp.setRequestHeader("Shopping-Cart", "application/json");
    xhttp.send("myObj");
  }

var myObj = { "name":"Norbert", "price":2900, "description":"Avaliable in Tan, Chocolate, Black, White"};

var myJSON = JSON.stringify(myObj);

const obj = JSON.parse('myObj');
