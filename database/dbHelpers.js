const { CurrentProducts, RelatedSuggestions } = require('./dbIndex.js');

const dbHelpers = {
  createCurrentProducts: (input) => {
    CurrentProducts.create(input);
  },
  createRelatedSuggestions: (input) => {
    CurrentProducts.create(input);
  },
  readCurrentProducts: (name) => {
    if (name === undefined) {
      return CurrentProducts.find({});
    }
    return CurrentProducts.find({ name });
  },
  readRelatedSuggestions: (title) => RelatedSuggestions.find({ title }),
  updateCurrentProducts: () => {

  },
  updateRelatedSuggestions: () => {

  },
  deleteCurrentProducts: () => {

  },
  deleteRelatedSuggestions: () => {

  },
};

module.exports = dbHelpers;