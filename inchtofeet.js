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
// }
// var mycelcius = celciustofarenheit(9);
// console.log(mycelcius);

// farenheittocelcius
function farenheittocelcius(farenheit){
    var celcius = (farenheit - 32) * 5/9;
    return celcius;
}
var myfareheit = farenheittocelcius(32);
console.log(myfareheit);
