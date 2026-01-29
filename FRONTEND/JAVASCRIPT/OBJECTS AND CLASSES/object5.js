const products = {name:"IPhone 15 max" , prices:"250000"}
Object.preventExtensions(products) // we cannot (additin is not allowed) , (/// delete is allowed ) , (updation is also allowed)

products.prices = 50000; // update is allowed
console.log(products);











