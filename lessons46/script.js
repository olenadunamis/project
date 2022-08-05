// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.firstElementChild);
// console.log(document.body.childNodes); // получаем все узлы которые находятся в body

// console.log(document.body.firstChild); // получаем первый узел body
// console.log(document.body.lastChild); // получаем последний узел body

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('[data-current = "3"]').nextElementSibling); // получает следующий элемент

for(let node of document.body.childNodes) // перебираем значения в псевдо-массиве с помощью for of для того чтобы иметь возможность останавливать цикл или прирывать
{
    if(node.nodeName == '#text')
    {
        continue;
    }
    console.log(node);
}