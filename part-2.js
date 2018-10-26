var fs = require('fs');
var content = fs.readFileSync('shopping-basket.json', 'utf-8');
//console.log(content);
var data = JSON.parse(content);
//console.log(data.basket[0].name);

for(var item of data.basket) {
  if(item.name == 'Candles') {
    item.quantity = 10;
  }
  item.cost = item.quantity * item.price;
  console.log(item.name + ' $' + item.cost);
}
var newbasket = JSON.stringify(data, null, 2);
fs.writeFileSync('new-basket.json', newbasket, 'utf-8');
/*
JSON (JavaScript Object Notation) is a lightweight format
that is used for data interchanging.
It is based on a subset of JavaScript
language (the way objects are built in JavaScript)

JSON, or JavaScript Object Notation, is a minimal,
readable format for structuring data.
It is used primarily to transmit data between
a server and web application, as an alternative to XML.

JSON is short for JavaScript Object Notation,
and is a way to store information in an organized,
easy-to-access manner.
In a nutshell, it gives us a human-readable
collection of data that we can access in a
really logical manner.

parsing = interpreting
*/
