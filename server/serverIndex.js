const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { readCurrentProducts, readRelatedSuggestions } = require('../database/dbHelpers.js');

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../public/')));

app.get('/', (req, res) => {
  res.render('../public/index.html');
});

app.get('/bechampions/suggestions', (req, res) => {
  /* theoretically, the api would be receiving a product name or id in the request
  given that this is not going to happen on this project,
  I'll just select a main product at random and display all the db items related to it
  */
  readCurrentProducts()
    .then((curProd) => {
      // choose a curProd at random in list
      const rndIndex = Math.floor(Math.random() * curProd.length);

      // create an array.
      // for each item in the relatedItems,
      // create an object that contains a property name and the val
      // push these objects into the array
      // pass the array to the search function
      const promArr = curProd[rndIndex].relatedItems.map((item) => readRelatedSuggestions(item));
      return Promise.all(promArr);
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log('express is listening on port 8000');
});
