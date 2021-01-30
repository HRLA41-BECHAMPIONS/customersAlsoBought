const db = require('../dbIndex.js');
const helpers = require('./madLibBuilders.js');
const mongoose = require('mongoose');

const currentProductsFn = helpers.currentProducts;
const relatedSuggestionsFn = helpers.relatedSuggestions;
const currentProductFn = helpers.currentProduct;

/* process:
  Since we have two tables, the currentProducts function will output an object with two arrays:
  the 100 currentProducts to be pushed in the corresponding table
  the 100 relatedSuggestions to be pushed in the corresponding table
*/
var seeder = () => {
  var lists = currentProductsFn(currentProductFn, relatedSuggestionsFn);
  currentProducts = lists.currentProducts;
  relatedSuggestions = lists.relatedSuggestions;
  return db.RelatedSuggestions.create(relatedSuggestions)
  .then(response=> {
    return db.CurrentProducts.create(currentProducts)
  })
  .then(response=> {
    // db.connections.disconnect();
    mongoose.disconnect();
  })
  .catch(err=> console.log(err));
  // db.CurrentProducts.close();
}
seeder();