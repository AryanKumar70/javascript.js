class product {  // class is blueprint of object means ("class" is home ka naksa) and ("object" is home itself) 

    name;    // data members  
    price;
    category;
    description;
    rating;

    constructor(){ // object create hone ke baad sbse pahle constructor call hota h 
        console.log("constructor called");
        return {x:10} // yha "object" return ho skta h in constructor 
    }

    addToCart(){   // data members ka functions
        console.log("Product added to cart");
    }

    removeFromCart(){
        console.log("Product removed  from cart");
    }

    displayProduct(){
        console.log("Product displayed");
    }

    buyProduct(){
        console.log("Product bought");
    }

}

let iphone = new product();  // object made 'iphone' with keyword 'new' and product name 'product'