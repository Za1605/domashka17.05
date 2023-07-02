//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const spr = (a,b) => {
    return a * b;
}

const s = spr (5,10);
console.log(s);

//створити функцію яка обчислює та повертає площу кола з радіусом r

const scolo = (p,r) => {
    return 2 * p * r ** 2;

}

const s11 = scolo(12,4);
console.log(s11);

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const scil = (p,r,h) => {
    return 2* p* r* h;

}

let s12 = scil(3.14,6,8);
console.log(s12);

//створити функцію яка приймає масив та виводить кожен його елемент

let user = [56, 98,`pretty woman`, true, 89];

const userArrey = (arr) => {
    for (const key of arr) {
        console.log(`${key}`)
    }
}

userArrey(user);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент

const textArrey = (text, eset) => {
  document.write(`<${eset}>${text}</${eset}>`);
}

textArrey(`pretty woman`, `ul*`);

//створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

const text1Arr = (text) => {
  document.write(`
  <ul>
  <li>${text}</li>
  <li>${text}</li>
  <li>${text}</li>
  </ul>`)
}

text1Arr(`one moment in your life`);

//створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).

const array34 = (text, count) => {
  document.write(`<ul>`);

    for ( let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }


document.write(`</ul>`);}

array34(`nice to meet you`, 8);

//створити функцію яка приймає масив об'єктів з наступними
//полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users52 = [
    {name :`ivan`, id: 98, age: 67},
    {name: `viktiriya`, id: 23, age: 34},
];

const userArray23 = (arr) => {
    for (const key of arr) {
        document.write(`<div> <li>id: ${key.id}</li> <br> <li>name:${key.name}</li> <br>age:${key.age}</div>`);
    }
}
    userArray23(users52);


//створити функцію яка повертає найменьше число з масиву


// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250