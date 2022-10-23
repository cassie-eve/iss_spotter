const { nextISSTimesForMyLocation } = require('./iss');

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

// fetchISSFlyOverTimes({ latitude: 49.2827291, longitude: -123.1207375 }, (error, data) => {
//   if (error) {
//     console.log('Oh no!', error);
//   }
//   console.log(data);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});