const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const parsed = JSON.parse(body);

    // if success = false, send an error
    if (parsed.success === false) {
      return callback(`The request was unsuccessful. Server message: ${parsed.message}`);
    }
    const coords = {};
    coords.latitude = parsed.latitude;
    coords.longitude = parsed.longitude;
    callback(null, coords);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };