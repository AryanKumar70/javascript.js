class product{ //1. builder design pattern format 
    constructor(builder){   //2. yha constructor  builder object as argument liya h  
        this.name = builder.name;
        if(builder.prices > 0){
            this.prices = builder.prices;
        }
        else{
            return {};
        }
        this.category = builder.category;
        this.description = builder.description;
        this.rating = builder.rating;

    }
}
const p = new product({
    name:"Iphone",
    prices:"10000",
    category :"Electronics",
    description:"Apple",
    rating:"5"
}

);
console.log(p);
