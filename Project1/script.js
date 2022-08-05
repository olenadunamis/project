"use strict";
// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
//"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"




const personaMovieDB = {
count:0,
movies: {},
actors: {},
genres: [],
privat: false,
start: function()
{
    personaMovieDB.count = +prompt('Сколько фильмо вы уже просомтрели?','');
    while (personaMovieDB.count == ''||personaMovieDB.count == null || isNaN(personaMovieDB.count))
    {
        personaMovieDB.count = +prompt('Сколько фильмо вы уже просомтрели?','');
    }

},
MyFilm: function(){
 
    for(let i = 0; i<2;i++)
    {  
   const a = prompt('Один из последних просмотренных фильмов',''),
    b = prompt('На сколько оцените его?','');
     
   
       if(a!=null && b!=null && a!='' && b!='' && a.length<50)
       {
             personaMovieDB.movies[a] = b;
             console.log('done');
       }
       else
       {
           console.log('Error');
           i--;
       }
    } 
   },
   checkingFilm: function(){
    if(personaMovieDB.count<10)
       {
           console.log('Просмотренно довольно мало фильмов!');
   
       }
       else if(personaMovieDB.count>=10 && personaMovieDB.count <30)
       {
           console.log('Вы классический зритель!');
       }
       else if(personaMovieDB.count>=30)
       {
           console.log('Вы киноман');
       }
       else{console.log('Error');}
    console.log(personaMovieDB);
   },
   showMyDB: function(property)
{
    if(!property)
    
    {
        console.log (personaMovieDB);
    }

},
toggleVisibleMyDB: function()
{
    if(personaMovieDB.privat)
    {
        personaMovieDB.privat = false;
    }
    else
    {
        personaMovieDB.privat = true;
    }

},

writeYourGenres: function ()
{
    for(let i = 1;i<2;i++)
    {
        const myGanre = prompt(`Введите аш любимый жанр через запятую!`);
        
        if(myGanre === '' || myGanre == null)
        {
            console.log("Некорректный ввод, проверьте поле ввода!");
            i--;
        }
        else{personaMovieDB.genres = myGanre.split(', ');
        personaMovieDB.genres.sort();
        }
    }
    personaMovieDB.genres.forEach((item,i) => {

        console.log(`"Любимый жанр ${i+1} - это  ${item}"`);
    });
}
};



 






