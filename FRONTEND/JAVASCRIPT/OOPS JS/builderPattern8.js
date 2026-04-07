class product{
    #prices;
    #name;
    #description;

    constructor(Builder){ // here only one object is passsed as paremeter that is "Builder" and build has all access of keys and values of class properties so yha no complicated and not need of to learn sequesnce of parameter and value  that is problem without builder 
        
        console.log("calling builder constructor");
        this.#name = Builder.name;
        // validation before object creation 
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

    static get Builder(){ // getter function is define for  builder and static means associate with class
        class Builder{
            constructor(){
                this.name = " "; // this name property belongs to builders
                this.name = " "; // this price property belongs to builders
                this.prices = 0;
                this.description = " ";
            }

            setName(incomingName){
                this.name = incomingName;
                return this; // to return builder object we use this keyword so ye use kiye so object builder obj ko ek bar likh ke call kiye nicche me at object creation ke time and sara value update hoke aatejega box me 

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
                return new product(this); // call the product constructor and pass builder object inside "return (this)"
            }

        }
        return new Builder(); // whensome call the builder getter they will get a new builder object


    }
}
// product.builder() calls the builder getter//
const p = product.Builder       // "p" is object and product is class that is connceted with builder which is a static function 
                    .setName("Iphone")
                    .setprices(1000000)
                    .setdescription("Apple")
                    .build();

p.displayproduct();                    

