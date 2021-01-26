const mL = require('./madLibContents.json');
const attribute = mL.attribute;
const materials = mL.materials;
const nouns = mL.nouns;
const urls = require('./urlFetchers.js');

const randomUrl = ()=> {
  return urls[Math.floor(Math.random()*urls.length)];
}

//setup the connection with the db
//import the db connection & the schemas into the seeding script
//run the insertion into the db;

const rndmGen = (length)=> {
  return Math.floor(Math.random() * length);
}

const relatedSuggestion= () => {
  let product = {};
  product.title = `${attribute[Math.floor(Math.random() * Math.floor(attribute.length))]} ${materials[Math.floor(Math.random(materials.length) * Math.floor(4))]} ${nouns[Math.floor(Math.random() * Math.floor(nouns.length))]}`;
  product.imgurl = randomUrl();
  return product
};

const relatedSuggestions= () => {
  let productsArr = [];
  for (let i = 0; i < 100; i++) {
    productsArr.push(relatedSuggestion())
  }
  return productsArr
}

const currentProduct = (entryIndex, entryList) => {
  /*
    retourne un objet qui contient:
    le nom du produit conrrespondant à l'entryIndex
    un array de strings - ces strings sont les noms de 14 entrées tirées au hasard dans la liste
  */

  //crée un array relatedItems
  //crée une listeDesIndexesDéjàUtilisés
  //crée une boucle de longueur 14
    //crée un index au hasard
    //assure toi que l'index créé n'est pas dans la listeDesIndexesDéjàUtilisés
    //pousse entryList[indexCrééHasard]
  //return {currentProudt, relatedItems};
  var currentProduct = entryList[entryIndex].title;
  var relatedItems = [];
  var alreadyUsedIndexes = [];
  for (var i=0; i<14; i++){
    var rndmIndex = rndmGen(100);
    while (alreadyUsedIndexes.includes(rndmIndex)){
      rndmIndex = rndmGen(100);
    }
    alreadyUsedIndexes.push(rndmIndex);
    relatedItems.push(entryList[rndmIndex].title);
  }
  return {currentProduct, relatedItems};
}

const currentProducts = (currentProduct, suggestionsBuilder) => {
  //crée un tableau contenant 100 produits,
  //retourn les 100 produits, et les

  var relatedSuggestions = suggestionsBuilder();
  var currentProducts = relatedSuggestions.map((item,i)=> {
    return currentProduct(i, relatedSuggestions);
  })
  return {currentProducts, relatedSuggestions}
}

//make the insertion with these items
//db.create(schemas.suggestions);
//db.create(schemas.alsoBought);

module.exports = {
  rndmGen,
  relatedSuggestion,
  relatedSuggestions,
  currentProduct,
  currentProducts
};

/*
une fois la table de suggestions implémentée
récupère tous les _ids de chaque relatedSuggestions
crée le deuxième script:
  pour chaque entrée de relatedSuggestions, choisit 14 autres entrés dans la même table, et rentre-les dans un array
*/