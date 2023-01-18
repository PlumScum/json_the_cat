const request = require('request');

const args = process.argv.slice(2);
const breed = args[0];

let url = "https://api.thecatapi.com/v1/breeds/" + `search?q=${breed}`;


request(url, (err, response, body) => {
  if (err) {
    return console.log("Error: ", err.message);
  }
  const data = JSON.parse(body);
  let breed = data[0];
  if (!breed)
    return console.log(`Failed to find breed: ${breed}.`);
  console.log(breed.description);
});