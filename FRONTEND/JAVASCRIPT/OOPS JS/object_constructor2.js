class product{  

    name;  //3. ye yha declarr nhi bhi kre so inside constructor me kre so output milega
    prizes;
    category;
    description;
    rating;

    constructor(productName,productPrize,productcategory,productDescription,productRating){
        this.name = productName;
        this.prizes = productPrize;
        this.category = productcategory;
        this.description = productDescription;
        this.rating = productRating;  //4. constructor is not return anything so iphone wla chiz output me aayega

    }



}

let iphone = new product("iphone12", 8000,"Mobile","Apple iphone 12",4.5);  //1. "new" se ek plane object bna so constructor call hoga jisme this ka reference "new object" hoga
console.log(iphone); // 2.Constructor me "this.name" so plane object me "name:iphone12" bn jayega and so on ..