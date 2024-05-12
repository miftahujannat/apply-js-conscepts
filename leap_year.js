function isleapyear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }

}

const myyear = 2087;
const ismyleapyear = isleapyear(myyear);
console.log('Is my year leap year',ismyleapyear);


const youryear = 2224;
const isyourleapyear = isleapyear(youryear);
console.log('is your leap year',isyourleapyear);
