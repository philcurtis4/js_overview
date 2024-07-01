
const apiKey = '453e76b47d31a5d94e87e19b3143c6ec';

const url = `https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=${apiKey}&units=imperial`

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

  fetch(url) //returns a promise object
  .then(function (responseObj) {
    return responseObj.json(); //parse the data for you also returns a promise with a then and catch

  })
  .then(function(data){
    const html = `
    <h2>Temp: ${data.main.temp}</h2>
    `;

    const outputDiv = document.querySelector('.output');

    outputDiv.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });


// const promiseObject = {
//   then: function () {
//     //when things go well
//   },

//   catch: function () {
//     //when things dont go well
//   }

// }