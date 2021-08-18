"use strict"
console.log('Hello world!');
//console.log(typeof username) - показывает тип данных в переменной
//null - как undefined, только еэ значение - ничего, тип данных определен и он - ничего
let block=document.querySelector('.block');
console.log(block);
console.log(typeof block);

//boolean = true/false
let willYouMarryMe=false;
if(willYouMarryMe){
    console.log(':)')
}   else {
    console.log(':(')
}
let willYouMarryMe=true;
if(willYouMarryMe){
    console.log(':)')
}   else {
    console.log(':(')
}

let trueOrFalse=58<18;
console.log(trueOrFalse);

let trueOrFalse=58>18;
console.log(trueOrFalse);
//infinity
let getInf=58/0;
console.log(getInf);
console.log(typeof getInf);
//bigint
const bigInteger=1346781329487392458163534n;
console.log(typeof bigInteger);
//symbol
let id=Symbol('id');
console.log(typeof id);
//function
let funcVariable=function name(params){
    //code
}
console.log(typeof funcVariable);
//преобразование
let userAge=58;
console.log(userAge)
console.log(typeof userAge)
userAge=String(userAge);
console.log(userAge)
console.log(typeof userAge)

let userAge='58';
console.log(userAge)
console.log(typeof userAge)
userAge=Number(userAge);
console.log(userAge)
console.log(typeof userAge)

let userAge='Age';
console.log(userAge)
console.log(typeof userAge)
userAge=Number(userAge);
console.log(userAge)
console.log(typeof userAge)

let userAge='72'/'2';
console.log(userAge)
console.log(typeof userAge)

let userAge='0';
console.log(userAge)
console.log(typeof userAge)
userAge=Boolean(userAge);
console.log(userAge)
console.log(typeof userAge)

let userAge='';
console.log(userAge)
console.log(typeof userAge)
userAge=Boolean(userAge);
console.log(userAge)
console.log(typeof userAge)

let userAge=0;
console.log(userAge)
console.log(typeof userAge)
userAge=Boolean(userAge);
console.log(userAge)
console.log(typeof userAge)

//операторы, унарные, бинарные
let userAge=30-6;//операнды
let userHeight=h-y;//бинарный

let userAge=30-6;
let userCash=-800//унарный
//унарными считаются операторы, которые применяются к одной операнде

x=11%3;
console.log(`результат взятия остатка от деления: ${x}`);
//проверка: 11=3*3(неполное частное от деления)+2(остаток)
//только + не преобразует строки в намбер, все остальные - преобразуют
let resultOne=+'25';
console.log(resultOne)
console.log(typeof resultOne)

let resultTwo=+10;
console.log(resultTwo)
console.log(typeof resultTwo)

let users='25', admins='10';
console.log(users+admins);
console.log(+users++admins);
console.log(Number(users)+Number(admins));

let a=1+2; b=2;
let result=8-(a=b+3)
console.log(a);
console.log(result);

//инкермент увеличивает на 1: i++ или i+=1
//дикремент уменьшает на 1: i-- or i-=1
//применяется только к переменным, при применении непосредственно со значением приведет к ошибке
//можно применять и до, и после переменной
//но
let userCounter=0, newUsers=userCounter++;
console.log(newUsers);
//тут будет 0, так как ещё не применился ++
let userCounter=0, newUsers=++userCounter;
console.log(newUsers);
//а тут будет 1, так как уже применился ++
let userCounter=0;
userCounter++; //or ++userCounter
console.log(newUsers);
//результат будет сразу в обоих случаях, без разницы

let userCounter=0;
console.log(++newUsers);
//тут же получить результат
let userCounter=0;
console.log(newUsers++);
//получить значение до этого ++

let userCounter=0, newUsers=2*++userCounter;
console.log(newUsers);

let userCounter=0, ++userCounter, newUsers=2*userCounter;
console.log(newUsers);

let userCounter=(8+2,10+1); //только последний результат возвращается
console.log(userCounter);

//=== - строгое равно
//!== строгое не равно

let itemA=0;
let itemB='0';
console.log(Boolean(itemA));
console.log(Boolean(itemB));
console.log(itemA==itemB);

console.log(0===false);
console.log('007'===7);
console.log('58'!==58);

console.log(null==undefined);//true
console.log(null===undefined);//false

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true

console.log(undefined>0);//false
console.log(undefined==0);//false
console.log(undefined>=0);//false

//оператор или - ||
console.log(true||true);//true
console.log(false||true);//true
console.log(true||false);//true
console.log(false||false);//false

