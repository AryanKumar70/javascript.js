const product = {name:"IPhone 15 max" , prices:"250000"} // "definepro" = particular key-values pairs pr restirction lgega
Object.defineProperty(product,"name",{writable:false}) // "defineprop" me (product,name) and writab. "false" kiye so name update nhi hoga 

product.name = "VIVO";
console.log(product); // but prices me change possible bcoz no striction in prices