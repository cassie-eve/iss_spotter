const { fetchCoordsByIP, fetchMyIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('216.19.183.177', (error, data) => {
//   if (error) {
//     console.log('Oh no!', error)
//   }
//   console.log(data);
// })

fetchISSFlyOverTimes({ latitude: 49.2827291, longitude: -123.1207375 }, (error, data) => {
  if (error) {
    console.log('Oh no!', error);
  }
  console.log(data);
});