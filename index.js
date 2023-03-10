const { fetchBreedDescription } = require("./breedFetcher.js");

const args = process.argv.slice(2);
const breed = args[0];

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});

module.exports = { fetchBreedDescription };