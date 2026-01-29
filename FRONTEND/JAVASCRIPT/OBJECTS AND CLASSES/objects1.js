let products = {  // here "Products" is 'objects' and inside (name,company,price,warr, color) is 'keys'
    name : "IPhone 14 Pro ",
    company: " Apple",
    price : "65000",
    warranty : "1year",
    color : "Black"
}

console.log(Object.keys(products)); // object keys printing methods
console.log(Object.keys(products).length)  // 'length' se keys ka total no bta dega ki kitan total key is present

console.log(Object.values(products)); // values of keys printing methods

console.log(Object.entries(products));  // "object.entries" se printing both keys and values.
