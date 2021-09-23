const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error !== null) {
      callback(error);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback("Breed not found!", null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };