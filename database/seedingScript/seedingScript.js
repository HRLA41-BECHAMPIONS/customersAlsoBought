const db = require('../dbIndex.js');
const helpers = require('./madLibBuilders.js');

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
  db.RelatedSuggestions.create(relatedSuggestions);
  db.CurrentProducts.create(currentProducts);
}
seeder();