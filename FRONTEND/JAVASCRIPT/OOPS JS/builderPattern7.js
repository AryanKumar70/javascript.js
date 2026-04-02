class product{
    #prices;
    #name;
    #description;

    constructor(Builder){
        console.log("calling builder constructor");
        this.#name = Builder.name;
        if(Builder.prices > 0){
            this.#prices = Builder.prices;
        }
        else{
            return {};
        }
        this.#description = Builder.description;
    }
    
    displayproduct(){
        console.log("product displayed",this.#name,this.#prices ,this.#description);
    }

    static get Builder(){ // getter builder
        class Builder{
            constructor(){
                this.name = " ";
                this.prices = 0;
                this.description = " ";
            }

            setName(incomingName){
                this.name = incomingName;
                return this;

            }

            setprices(incomingprices){
                this.prices = incomingprices;
                return this;

            }

            setdescription(incomingdescription){
                this.description = incomingdescription;
                return this;

            }

            build(){      // build product ka constructor call kr rha h and passing this as arguments
                return new product(this);
            }

        }
        return Builder;


    }
}
// product.builder() calls the builder getter//
const p = new product.Builder()       // yha builder ka object bna h 
                    .setname("Iphone")
                    .setprices("1000000")
                    .setdescription("Apple")
                    .build();

p.displayproduct();                    

