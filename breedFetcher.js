const request = require("request");

let userInput = process.argv.slice(2);

const breedId = userInput[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedId}`, (error, response, body) => {
  if (error !== null) {
    console.error('error:', error); // Print the error if one occurred
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Breed not found!");
  } else {
    console.log(data[0].description);
  }
});