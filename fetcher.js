//requires fs library, required to write a file once webpage is fetched

const fs = require('fs');

// requires process, and process.argv allows command line to accept arguments. we slice 2 off to get rid of file location and node version in array.

const process = require('process');
const args = process.argv.slice(2);

// requires request library, needed to get elements of an html page that exists on the internet currently

const request = require('request');

// function writePage requests a webpage from the internet, and writes the resource into a file in the current directory named webpageWriter.txt

const writePage = function(url, path) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(`error fetching url: ${error}`);
      return;
    }

    fs.writeFile(path, body, err => {
      if (err) {
        console.error(`error saving file: ${err}`);
        return;
      }

      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    });
  });
};

// runs function writePage for two command line arguments, the URL and the file location.

writePage(args[0], args[1]);