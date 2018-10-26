var fs = require('fs');
var fileContents = fs.readFileSync('names.txt', 'utf-8');
var arr = fileContents.split('\n'); //elements were seperated by new line

for (var i = 0 in arr) {
  console.log(arr[i] + ' break');
}

arr.reverse();
//for (var i in arr)
for (var i of arr) {
  console.log(i + ' break');
  name = i + '.txt';
  arrrev = reverseString(i);
  fs.writeFileSync(name, arrrev, 'utf-8');
}

arr = arr.join(', '); //join the elements into string, they will be sepereted by ", "
console.log(arr);

//fs.writeFileSync(nameOfFile, fileContents, fileEncoding)
fs.writeFileSync('names-reversed.txt', arr, 'utf-8');

function reverseString(str) {
    return str.split( '' ).reverse( ).join( '' );
}
