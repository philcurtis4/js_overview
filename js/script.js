const weatherBtn = document.querySelector('#weather-btn');



function outputWeather () {
  const cityInput = document.querySelector('#city-input');
  const apiKey = '453e76b47d31a5d94e87e19b3143c6ec';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=imperial`

fetch(url) //returns a promise object
  // The first then callback function will be put to the side until the server responds back
  .then(function (responseObj) {
    //passing the parsed json object to the next then
    return responseObj.json(); //parse the data for you also returns a promise with a then and catch

  })
  .then(function(data){
    // Once we have the data, we create some html utilizing that data in some way
    const html = `
    <h2>Temp: ${data.main.temp}</h2>
    `;
    //target an existing element in the DOM
    const outputDiv = document.querySelector('.output');
    //output our completed html into the DOM/Window
    outputDiv.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });

}

weatherBtn.addEventListener('click', outputWeather);
// fetch(url) //returns a promise object
//   .then(function (responseObj) {
//     const dataPromise = responseObj.json(); //parse the data for you also returns a promise with a then and catch

//     dataPromise.then(function (data) {
//       console.log(data);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

  // fetch(url) //returns a promise object
  // .then(function (responseObj) {
  //   const dataPromise = responseObj.json(); //parse the data for you also returns a promise with a then and catch

  //   // dataPromise.then(function (data) {
  //   //   console.log(data);
  //   // });

  //   return 'passed'; //is passed to the next then
  // })
  // .then(function(val){
  //   console.log(val, 'passed to 2nd then');
  //   return 'something else';
  // })
  // .then(function(something) {
  //   console.log(something);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });


  //we make a fetch request to openweathermap for current weather data
  //the url must match the servers criteria for a request

  


// const promiseObject = {
//   then: function () {
//     //when things go well
//   },

//   catch: function () {
//     //when things dont go well
//   }

// }