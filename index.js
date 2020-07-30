// dependencies

const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (error, fetch) => {
  if (error) {
    console.log('Query error! Details:', error);
  } else {
    console.log(fetch);
  }
});