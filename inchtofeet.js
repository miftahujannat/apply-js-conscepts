function inchtofeet(inches){
    var feet = inches / 12;
    return feet;
}


// var myinches = 132;
// var feet = inchtofeet(myinches);
// console.log('myinches is feet',feet);

// var dadinches = 144;
// var feet = inchtofeet(dadinches);
// console.log(feet);


// mile to km 
// function miletokilomiter(miles){
//     var km = miles * 1.60934;
//     return km; 
// }
// var marathon = miletokilomiter(26.2);
// console.log(marathon);

// celciustofarenhit
// function celciustofarenheit(celcius){
//     var farenheit = celcius * (9/5) + 32;
//     return farenheit;
//  }
//  var mycelcius = celciustofarenheit(9);
//  console.log(mycelcius);

// farenheittocelcius
// function farenheittocelcius(farenheit){
//      var celcius = (farenheit - 32) * 5/9;
//      return celcius;
//  }
//  var myfareheit = farenheittocelcius(345);
//  console.log(myfareheit);


// function value(x){
//     var r = Math.sqrt(x/3.1416);
//     return r;

// }
// var myvalue = value(5);
// console.log(myvalue);

// x = 3.1316* r^2
// 3.1316* r^2 = x
// r^2 = x/ 3.1416
// r = sqrt x/3.1416

function value(x){
    var r = x*25;
    return r;
}
var valueis = value(3);
console.log(valueis);