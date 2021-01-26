var fs = require('fs');
var files = fs.readdirSync('/home/antoine/Documents/HR/Week6/FEC/Repos/assets/images/Suggestions-Images');

var urls = files.map((item, i) => {
  return 'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/' + item;
});
console.log(urls);

module.exports = urls;