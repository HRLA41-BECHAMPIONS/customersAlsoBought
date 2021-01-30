var fs = require('fs');
// var files = fs.readdirSync('/home/antoine/Documents/HR/Week6/FEC/Repos/assets/images/Suggestions-Images');
var files = [
'HNS_85653407Q88_GraniteHeather_Coed.jpg',
'HNS_GT78HY08160_CourageousRed_Front.jpg',
'HNS_GF01586048_White_Coed.jpg',
'HNS_P0894549314_Black_Coed.jpg',
'HNS_GF68586833_White_Coed.jpg',
'HNS_P1022549314_RegalNavy_Front.jpg',
'HNS_GF68Y06819_CollageBlue_Front.jpg',
'HNS_S2202586010_OxfordGrey_Front.jpg',
'HNS_GF70Y06145_VenetianPurple_Coed.jpg',
'HNS_S5858549724_DarkKhaki_Front.jpg',
'HNS_GF89H586854_GraniteHeather_Coed.jpg',
'HNS_S5957_HushPink_Front.jpg',
'HNS_GT19Y06145_White_Front.jpg',
'HNS_S6432590003_Black_Front.jpg',
'HNS_GT23HY08160_CourageousRed_Front.jpg',
'HNS_T0223_TeamGold_Coed.jpg',
]

var urls = files.map((item, i) => {
  return 'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/' + item;
});
console.log(urls);

module.exports = urls;