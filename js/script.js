function keyPressed(eventObj) {
    console.log(eventObj.key);

    const h1 = document.querySelector('h1');
    h1.innerText = `${eventObj.key} - ${eventObj.keyCode}`
  
    if (eventObj.keyCode === 13) {
      console.log(eventObj.key);
      console.log('You have pressed the enter key');
    }
  }
  
  document.addEventListener('keydown', keyPressed);