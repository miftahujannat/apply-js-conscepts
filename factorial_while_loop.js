// function getfactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while (i <= number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// const myfactorial = getfactorial(6);
// console.log(myfactorial);

function getfactorial(number){
    let factorial = 1;
    let i = number;
    while(1 >= 1){
        factorial = factorial * i;
        i--;
    }
}
// const myfactorial = getfactorial(6);
// console.log(myfactorial);

//for loop revers

function getfactorial2(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;

    }
    return factorial;
}
const myfactorial = getfactorial2(9);
console.log(myfactorial);
