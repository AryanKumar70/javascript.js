const products = {name:"IPhone 14 Pro", price:125000}
console.log(products);

console.log(Object.seal(products)); // "object.seal" = immutabiliy lga diye mtlb kuch change nhi kr payenge in 'prodcuts'
products.company = "apple" // adding new keys and value which is not allowed in seal
console.log(products);

console.log(Object.isSealed(products));  //// if object is Sealed  so (isSealed = true) but  (isFrozen = false)   [Frozen>Sealed]
console.log(Object.isFrozen(products));


delete products.name;  // deletion is also not allowed in seal
console.log(products);

products.name = "IPhone 14 pro Max"  // existing keys me change is allowed in "seal"
console.log(products);  // update keys values pair


