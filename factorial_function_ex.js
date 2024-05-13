function startfunction(number){ 
    let funtion = 1;
    for(i = 1; i <= number; i++){
        funtion = funtion * i;
    }
    return funtion;
}

var firstfactorial = startfunction(9);
console.log('this function is 9 ',firstfactorial);