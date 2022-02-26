const fs = require('fs');
// function to write the HTML file.
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        message: 'HTML Generated!'
      });
    });
  });
};
module.exports = writeFile;