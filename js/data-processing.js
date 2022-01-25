//Put function in code at top data processing
// from https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

//use location object to access querystring (address bar)
const queryString = window.location.search;
let myData = ''; //will store data for output   
let myCart = ''; 
let myTotal = 0;
if(queryString != ""){//process the data

  //separate querystring parameters
  const urlParams = new URLSearchParams(queryString);

  urlParams.forEach(function (value, key) {
    if (key == "Cart") {//add price of cart items
      //alert(value);
      switch(value){
        
        case "widget":
          myCart += "Widget: $3.99 <br/>";
          myTotal += 3.99;
        break;
        case "Sprocket":
          myCart += "Sprocket: $5.99 <br/>";
          myTotal += 5.99;
        break;
        case "Thingy":
          myCart += "Thingy: $1.99 <br/>";
          myTotal += 1.99;
        break;

      }
    } else { //builds the shipping info
      /* 
      Here we apply titleCase to?
      Keys , First_Name,Last_Name,Address, City
      value = titleCase(value);
      */

      switch(key){
        case "First_Name":
        case "Last_Name":
        case "Address":
        case "City":
          value = titleCase(value);
        break;

      }
    //will replace underscore with spaces
    key = key.split("_").join(" ");
    myData += `<p>${key}: ${value}</p>`;
    }
});

  myCart = `<h3>Cart Contents</h3>
      <p> ${myCart} </p>
      <p> Total: $${myTotal} </p>
      `;
  myData = myCart + '<h3>Shipping Info</h3>' + myData;
  myData += `<p><a href="index.html">CLEAR</a></p>`;
  document.getElementById("output").innerHTML = myData;
}

