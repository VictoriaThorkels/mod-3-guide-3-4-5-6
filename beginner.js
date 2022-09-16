// Fundamentals and Data Types 
// Conditionals
// Loops and Iterators 
// Functions 

console.log('Cake Recipe:'); //console log (Fundamentals, comment)

var vanillaCake; //vanilla cake intro (Fundamentals, variable)
vanillaCake = "Classic Vanilla Cake Recipe" //to define it even further (Fundamentals, assignment operator)
console.log(vanillaCake); //console log (Fundamentals, output)

//(Data Types, variables and strings)
var ingredients = ["For the Cake:"]; //ingredients for cake
var unsaltedButter = "1 stick unsalted butter, at room temperature, plus more for the pans. ";
console.log(unsaltedButter[0]);
var plainFlour = "3 cups plain flour, spooned and leveled, plus more for the pans. "
console.log(plainFlour[0]);
var bakingPowder = "1 teaspoon baking powder";
console.log(bakingPowder[0]);
var salt = "1 teaspoon fine salt";
console.log(salt[0]);
var sugar = "2 cups granulated sugar";
console.log(sugar[0]);
var vegetableOil = "1/2 cup vegetable oil";
console.log(vegetableOil[0]);
var eggs = "5 large eggs, at room temperature";
console.log(eggs[0]);
var vanillaExtract = "1 tablespoon pure vanilla extract";
console.log(vanillaExtract[0]);
var milk = "1 cup milk";
console.log(milk[0]);

//(Data Types, boolean, arrays, numbers and objects)
ingredients.push({
    name: "unsalted butter",
    amount: 1,
    unit: "stick",
    desc: "1 stick unsalted butter, at room temperature, plus more for the pans, ",
    img: "http://cdn.shopify.com/s/files/1/0625/4788/6337/products/icelandic-unsalted-butter-osaltad-smjor-250-gr-690758.png?v=1645371463",
    isVegan: false
 }); 
 ingredients.push({
    name: "plain flour",
    amount: 3, 
    unit: "cups",
    desc: "3 cups plain flour, spooned and leveled, plus more for the pans, ",
    img: "https://verslun.hagkaup.is/wp-content/uploads/2020/03/2657.jpg",
    isVegan: true
 }); 
 ingredients.push({
    name: "baking Powder",
    amount: 1,
    unit: "teaspoon",
    desc: "1 teaspoon baking powder, ",
    img: "https://media.kronan.is/products/73055-thumbnail-255x255-70.jpg",
    isVegan: true
});
ingredients.push({
    name: "salt",
    amount: 1,
    unit: "teaspoon",
    desc: "1 teaspoon fine salt, ",
    img: "https://jjvoruhus.is/image/cache/catalog/Vorur/Krydd/Salt/Kötlu%20matarsalt%20f%C3%ADnt%201.kg-500x500.png",
    isVegan: true
});
ingredients.push({
    name: "sugar",
    amount: 2,
    unit: "cups",
    desc: "2 cups granulated sugar, ",
    img: "https://veganbudin.is/wp-content/uploads/2021/10/9da11-dansukker-sykur-2-kg_2500x2500-980x980.jpg",
    isVegan: true
});
ingredients.push({
    name: "vegtable oil",
    amount: 1/2,
    unit: "cups",
    desc: "1/2 cups vegatable oil, ",
    img: "https://ekran.is/wp-content/uploads/2022/04/90c06cbb-178c-4e08-87a3-447f256a89e7.png",
    isVegan: true
});
ingredients.push({
    name: "eggs",
    amount: 5,
    unit: "large",
    desc: "5 large eggs, at room temperature, ",
    img: "https://static.heimkaup.is/images/products/01/83501/8e255-stjornuegg-fersk-brun-egg-12-stk-stor-816-g_670x400.jpg",
    isVegan: false
});
ingredients.push({
    name: "vanilla extract",
    amount: 1,
    unit: "teablespoon",
    desc: "1 tablespoon pur vanilla extract ",
    img: "http://cdn.shopify.com/s/files/1/0625/4788/6337/products/vanillu-dropar-vanilla-essence-30-ml-280372.jpg?v=1645372240",
    isVegan: true
});
ingredients.push({
    name: "milk",
    amount: 1,
    unit: "cups",
    desc: "and 1 cup milk.",
    img: "https://ik.imagekit.io/8yp5biery/0101.png",
    isVegan: false
});

var ingredientsFrosting = ["For the Frosting"]; // ingredients for frosting
var saltFrosting = "1 Pinch fine salt";
console.log(saltFrosting[0]);
ingredientsFrosting.push({
    name: "salt, frosting",
    amount: 1,
    unit: "pinch",
    desc: "1 pinch fine salt, ",
    img: "https://jjvoruhus.is/image/cache/catalog/Vorur/Krydd/Salt/Kötlu%20matarsalt%20f%C3%ADnt%201.kg-500x500.png",
    isVegan: true
})
var icingSugarFrosting = "3 1/4 cups icing' sugar";
console.log(icingSugarFrosting[0]);
ingredientsFrosting.push({
    name: "icing'sugar, frosting",
    amount: 3 + 1/4,
    unit: "cups",
    desc: "3 1/4 cups icing' sugar, ",
    img: "https://veganbudin.is/wp-content/uploads/2021/10/f292a-dansukker-florsykur-500-g_670x400-980x980.jpg",
    isVegan: true
})
var vanillaExtractFrosting = "2 teaspoons pure vanilla extract";
console.log(vanillaExtractFrosting[0]);
ingredientsFrosting.push({
    name: "vanilla extract, frosting",
    amount: 2,
    unit: "teaspoons",
    desc: "2 teaspoons pure vanilla extract ",
    img: "http://cdn.shopify.com/s/files/1/0625/4788/6337/products/vanillu-dropar-vanilla-essence-30-ml-280372.jpg?v=1645372240",
    isVegan: true
})
var milkFrosting = "1/4 cup milk";
console.log(milkFrosting[0]);
ingredientsFrosting.push({
    name: "milk, frosting",
    amount: 1/4,
    unit: "cups",
    desc: "and 1/4 cup milk.",
    img: "https://ik.imagekit.io/8yp5biery/0101.png",
    isVegan: false
})
var unsaltedButterFrosting = "3 sticks (1 1/2 cups) unsalted butter, at room temperature";
console.log(unsaltedButterFrosting[0]);
ingredientsFrosting.push({
    name: "unsalted butter, frosting",
    amount: 3,
    unit: "stick",
    desc: "3 sticks (1 1/2 cups) unsalted butter, at room temperature, ",
    img: "http://cdn.shopify.com/s/files/1/0625/4788/6337/products/icelandic-unsalted-butter-osaltad-smjor-250-gr-690758.png?v=1645371463",
    isVegan: false
})

// (Conditionals, if)
// (Functions, return)
function trueOrFalse(icingSugarFrosting) {
    if (icingSugarFrosting){
        return "It is vegan";
    }
    return "It is not vegan";   
}

// (Loops, while)
let i = 4;
while(i >= 0) {
    if (ingredientsFrosting[i].isVegan){
        console.log(ingredientsFrosting[i].name);
    }
    ingredientsFrosting.push(i);
    i--;
}

//(Functions)




console.log([]); //console log
//muna að skrifa comment!
