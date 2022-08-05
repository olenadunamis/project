const btns = document.querySelectorAll('button'),
overlay = document.querySelectorAll('.overlay');

const deleteElement = (e) =>{
    // e.target.remove();
console.log(e.target);
console.log(e.type);
};

// btn.addEventListener('mouseenter',(e) =>{
// console.log('Hover');
// });

// btn.addEventListener('click',deleteElement);
// overlay.addEventListener('click',deleteElement);

btns.forEach(btn =>{

    btn.addEventListener('click',deleteElement, {once:true});

});

const link = document.querySelector('a');

link.addEventListener('click',function(event){
event.preventDefault();

console.log(event.target);
});

