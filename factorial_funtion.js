// let factorial = 1;
// for (let i = 1; i <= 5; i++){
//     factorial = factorial * 1;
// }
// console.log(factorial);

function getfactorial(number){
   let factorial = 1;
   for(let i = 1; i <= number; i++){ 
    factorial = factorial * i;
   } 
   return factorial;
}
var  firstfactorial = getfactorial(7);
console.log('factorial of 7 is',firstfactorial);

// var secondfactorial = getfactorial(9);
// console.log('factorial of 9 is',firstfactorial);
