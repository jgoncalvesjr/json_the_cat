// Dependencies to be used

const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback('Breed not found!', null);
    } else {
      const data = JSON.parse(body);
      if (!data.length) {
        callback(`No description found for ${breedName}!`, null);
      } else
        callback(null, data[0].description.trim());
    }
  });
};

// modules exported

module.exports = { fetchBreedDescription };