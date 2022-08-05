// console.log( NaN || 2 || undefined ); //true 2

// console.log( NaN && 2 && undefined );//false Nan

// console.log( 1 && 2 && 3 );//true 3

// console.log( !1 && 2 || !3 ); //false

// console.log( 25 || null && !3 ); //true 25

// console.log( NaN || null || !3 || undefined || 5); //true 5
 
// console.log( NaN || null && !3 && undefined || 5); // true 5
 
// console.log( 5 === 5 && 3 > 1 || 5);//true 



// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// console.log(hamburger === 3 && cola || fries === 3 && nuggets); // true 2


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

// console.log (hamburger || cola || fries === 3 || nuggets);// true 2


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }
// console.log (hamburger && cola || fries === 3 && nuggets); //false

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i-5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask();


// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for(let i = 0;i<data.length;i++)
//     {
//         if(typeof(data[i]) === "number")
//         {
//             data[i*2];
//         }
//         else
//         {
//             `${data[i]}  done`;
//         }
//     }
    
//     // Не трогаем
//     return data;
// }
// secondTask();

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }


// console.log(result);

// function calculateVolumeAndArea(a) {
//     if(typeof(a) === 'stringr' || a<0 || !Number.isInteger(a))
//     {
//         console.log('При вычислении произошла ошибка!');
//     }
    
       
//         return(`Объем куба =  ${a*a*a}\nПлощадь всей поверхности = ${6*(a*a)}`);
//    }


//    console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(b) {
//     if(typeof(b)=== 'string' || b<0 || !Number.isInteger(b))
//     {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }
//     else if(b===0 || b>36)
//     {
//         return 'Таких мест в вагоне не существует';
//     }
    
//      for (let i = 4; i <= 36; i = i + 4) {
//         if (b <= i)
//         {
//             return `Ваш номер купе = ${Math.ceil(i / 4)}`;
//         }
// }
    
// }
//     console.log(getCoupeNumber(12));


// function findMaxNumber(a1,a2,a3,a4) {
//     if(typeof(a1) === 'string'  || typeof(a2) === 'string'  || typeof(a3) === 'string' || typeof(a4) === 'string' )
//     {
//          return 'Ошибка одно из чисел является строкой , исправьте!!!';
//     }
    
//          return `Ваше максимальное число является -- ${Math.max(a1,a2,a3,a4)}`;

// }
// console.log(findMaxNumber(4,10,500,5));

// function fib(num) {
//      if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//          return "";
//      }
 
//      let result = '';
//      let first = 0;
//      let second = 1;
 
//      for (let i = 0; i < num; i++) {
//          if (i + 1 === num) {
//              result += `${first}`;
//              // Без пробела в конце
//          } else {
//              result += `${first} `;
//          }
 
//          let third = first + second;
//          first = second;
//          second = third;
//      }
 
//      return result;
//  }
 
//  console.log(fib(20));

// function fib(number) {
//      if(typeof(number) === 'string')
//      {
//          return '';
//      }
 
//          let res = '';
//          let first = 0;
//          let second = 1;
//          for(let i = 0; i<number;i++)
//          {
//              if(i+1 === number)
//              {
//                  res += `${first} `;
//              }
//              else{res += `${first} `;}
//              let third = first +second;
//                     first = second;
//                  second = third;
//          }
 
//          return res;
     
//  }
 
//  console.log(fib(7));

//Деструктуризация объекта
// const obj1 = 
// {
//     myName: "Alex",
//     myAge: 21,
//     nameWife: "Elena",
//     ageWife: 18,
//     obj2:{
//        nameKid: "Ivan",
//        ageKid: 2 
//     }
// };

//  const {nameKid,ageKid} = obj1.obj2; //Деструктуризация 
// console.log(nameKid,ageKid);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

// arr.lenght === 0? str = 'Семья пуста: ' : str = 'Семья состоит из: ';

// arr.forEach(element => {
//     str += `${element} `;
// }); 
//     return str;
// }
// console.log(showFamily(family));

//  const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

//  function standardizeStrings(arr) {
//     arr.forEach(city => {
//        console.log(city.toLowerCase());
//     });
//  }
//  standardizeStrings(favoriteCities);



// const someString = 'This is some strange string';

// function MyReverse(str) {
//     if(typeof(str) === 'number')
//     {
//         return 'Это не строка!!';
//     }
    
//     return str.split('').reverse().join(''); //split - разбиваем , reverse - меняем последовательность ,join - объединяем
// }
// console.log(MyReverse(someString));

//  const baseCurrencies = ['USD', 'EUR'];
//  const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

//  function availableCurr(arr, missingCurr) {
//     let str = '' ;
//     str.length === 0 ? str ='Валют нет' : str ='Валюты в наявности:\n';
//     arr.forEach(function(curs,i){
//             if(curs !== missingCurr )
//             {
//                 str += `${curs}\n`;
//             }

//     });
//     return str;
//  }
//  console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));



// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let volume = 0;
//     let square = 0;
//    data.shops.forEach(shop => {
//     square += shop.width * shop.length;
//    });
//    volume += data.height * square;

//    if(data.budget  - (volume * data.moneyPer1m3) >= 0)
//    {
//      console.log(`Увас хватает бюджета, остаток ${data.budget  - (volume * data.moneyPer1m3)}`);
//    }
//    else{
//     console.log(`Бюджета не хватает, вы должны ${data.budget  - (volume * data.moneyPer1m3)}`);
//    }
// }

// isBudgetEnough(shoppingMallData);


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam','Alex','Mamba'];



// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], d = [], rest = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         }else if(i<12)
//         {d.push(arr[i]);} 
//         else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c,d, `Студент у которо(й/го) нет пары: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }

// console.log(sortStudentsByGroups(students));




// let x = 5;
//  console.log( x++ ); //5
// console.log([ ] + false - null + true); //Nan
// let y = 1; let x1 = y = 2; console.log(x1);//2
// console.log([ ] + 1 + 2); //12 так как пустой массив как строка

// console.log("1"[0]);//1
// console.log(2 && 1 && null && 0 && undefined)//null &&(и) запинается на лжи , ||(или) запинается на тру 
// console.log(null||2 && 3||4)//3

// a = [1,2,3], b =[1,2,3];
// console.log(a==b)//false

// console.log(+"infinity");//NaN
// let a12= "Ёжик", b12 = "Яблоко";
// console.log (a12 == b12);//false

// console.log(0 || "" || 2 || undefined || true || false);//2


// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'открыто' : answer = 'закрыто';

//     return answer;
// }
// console.log(isOpen(restorantData.openNow));


// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0) + (sDish.price.slice(0)) < average) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

//  console.log(transferWaitors(restorantData));


// function factorial(n) {
   
//     if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//         return "Ошибка, проверьте данные";
//     }
    
    
//     if(n <= 1 )
//     {
//         return 1;
//     }
//     else 
//     {
//          return n * factorial(n-1);
//     }
    
// }

// console.log(factorial(5));

//РАБОТА С MAP (Массив с массивами!)
// const shops = [
//     {rice:200},
//     {oil: 400},
//     {bread: 100}
// ];

// const budget  = [1999,2000,9000];
// const map = new Map();

// shops.forEach((shop,i)=>{
// map.set(shop,budget[i]);
// });
// console.log(map);
   
// //Получаем ключи
// // const goods = [];
// // for(let shop of map.keys())
// // {
// //     goods.push(Object.keys(shop)[0]);
// // }
// // console.log(goods);

// // for(let price of map.values())
// // {
// //     console.log(price);
// // }

// // for(let [shop,price] of map.entries())
// // {
// //     console.log(price,shop);
// // }

// //Перебор Map
// map.forEach((value,key,map) =>{
// console.log(key,value);
// });

// // Объект в Мар
// const user = {
// name: 'Alex',
// surname: 'Chepelev',
// birthday:'01/08/2001',
// showMyPublicData: function()
// {
//     console.log(`${this.name} ${this.surname}`);
// }
// }
// const userMap =  new Map(Object.entries(user));
// console.log(userMap);

// //Мар в объект!
// const newUserObj = Object.fromEntries(userMap);
// console.log(newUserObj);


// function amountOfPages(summary){
// let counter = 0;
// let i = 0;
// while(counter<summary)
// {
//     i++;
//     counter += (i+'').length;
// }
// return i;
// }

// console.log(amountOfPages(1095));

    // С использованием Set
// function isPangram(string) {
//     return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi,'').split('')).size===26;
//     }

//     console.log(isPangram('The quick brown fox jumps over the lazy dog'));


//     // С использованием регулярных выражений
// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }


function deepCount(a){
   let count = a.length;
   for(let i = 0; i<a.length;i++)
   {
        if(Array.isArray(a[i]))
        {
            count +=deepCount(a[i]);
        }
   }
   return count;
}

console.log(deepCount([1, 2, [3, 4, [5]]]));