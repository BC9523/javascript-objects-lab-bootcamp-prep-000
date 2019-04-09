var recipes = {bread: '[water, flour, yeast]'};

function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({}, object,{[key]:value});
}