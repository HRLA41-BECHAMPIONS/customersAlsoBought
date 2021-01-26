var schema = {
    currentProducts: {
      currentProduct: String,
      relatedItems: [{ type: String }]
    },

    relatedSuggestions: {
      title: { type: String },
      imgurl: { type: String }
    }
};
module.exports = schema;