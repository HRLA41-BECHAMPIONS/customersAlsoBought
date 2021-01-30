const mongoose = require('mongoose');
const schema = require('./seedingScript/schemas.js');
mongoose.Promise = global.Promise;
var connections = mongoose.connect('mongodb://localhost/customersAlso');

const relatedSuggestions = mongoose.Schema(schema.relatedSuggestions);
const currentProducts = mongoose.Schema(schema.currentProducts);

const RelatedSuggestions = mongoose.model('suggestions', relatedSuggestions);
const CurrentProducts = mongoose.model('current', currentProducts);

module.exports = {
  connections,
  CurrentProducts,
  RelatedSuggestions
}