//const els = document.querySelectorAll('ul li');
const ul = document.querySelector('ul');

function doSomething(eventObj) {
    const el = eventObj.target;

    if(el.tagName === 'LI') {
        eventObj.target.style.background = 'red';
}
    console.log(eventObj.target.innerText);
    // els.forEach(function(li) {
    //     li.style.background = '#555';
    // })
    eventObj.target.style.background = 'red';
}

// for (const el of els) {
//     el.addEventListener('click', doSomething)
// }

ul.addEventListener('click', doSomething);
//eventObj.target is the same as using querySelector grabbing the element


const fruits = ['orange', 'apple', 'grape'];

fruits.forEach(function (li, index) {
    console.log(li, index);
});