// Dependencies to be used

const request = require('request');

const breed = process.argv[2];

//const fetchBreed = () => {
// }
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    return console.log(`Error: ${error}`);
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    return console.log('No description found!');
  }
  return console.log(data[0].description);
});


/*
// User input setup

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// page and file accumulator to constants

const args = process.argv.slice(2);
const url = args[0];
const file = args[1];

// runtime

// must have a valid url and filename

if (!url || !file) {
  console.log('Invalid URL or file path. Try again!');
  process.exit();
}

// page fetch

const pageFetch = () => {
  request(url, (error, response, body) => { // request callback
    if ((response && response.statusCode !== 200)) {
      console.log(`Could not dowload. Web returned error code ${response.statusCode}!`);
      process.exit();
    } else if (error) {
      console.log(`Could not dowload. Web returned "${error}" error message!`);
      process.exit();
    } else {
      saveFile(body);
    }
  });
};
*/

/*
// checking if file already exists

if (fs.existsSync(file)) {
  rl.question(`${file} already exists. Overwrite? (y/n) : ` , (answer) => {
    if (answer === 'y') {
      pageFetch();
    } else {
      process.exit();
    }
  });
} else {
  pageFetch();
}

// file saving to disk

const saveFile = (body) => {
  fs.writeFile(file, body, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${file}.`);
    process.exit();
  });
};
*/