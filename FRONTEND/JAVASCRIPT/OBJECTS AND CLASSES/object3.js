const products = {name:"IPhone 15 Pro", price:125000}


console.log(Object.freeze(products)); // "object.freeze" = Highest level of immutabiliy lga dega so adding ,deleting,update not allowed
products.company = "apple"
console.log(products);

console.log(Object.isFrozen(products)); ///// check is freeze h  object so true and is not freeze object so return false
console.log(Object.isSealed(products));  //// if object is freeze  so (isFrozen = true) , (isSealed = true) 

delete products.name;  // deletion is also not allowed in "freeze"
console.log(products);

products.name = "IPhone 15 pro Max"  // Not update is allowed in existing key value pairs. 
console.log(products);  


