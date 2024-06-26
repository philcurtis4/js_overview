let count = 10;
const h1 = document.querySelector('h1');

function endGame() {
    h1.innerText = 'Game Over';
}


const interval = setInterval(function () {
    count--;

    h1.innerText = `Count: ${count}`;

    if(!count) {
        clearInterval(interval);
        endGame();
    }

    
}, 1000);



// setTimeout(function() {

//     console.log('Time is up!');
// }, 3000);


