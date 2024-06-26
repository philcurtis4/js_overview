let count = 3;
const h1 = document.querySelector('h1');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('#close-modal');

function endGame() {
    modal.classList.remove('hide');
}


const interval = setInterval(function () {
    count--;

    h1.innerText = `Count: ${count}`;

    if(!count) {
        clearInterval(interval);
        endGame();
    }

    
}, 1000);

function closeModal() {
    modal.classList.add('hide');
};

document.body.addEventListener('click', closeModal);

modal.addEventListener('click', function(eventObj) {
    eventObj.stopPropagation();
});

closeButton.addEventListener('click', closeModal);

// setTimeout(function() {

//     console.log('Time is up!');
// }, 3000);


