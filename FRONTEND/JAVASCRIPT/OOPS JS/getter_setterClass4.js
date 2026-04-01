class product{  

    #name;    // 1.private kiye h so bahar se accessible and change nhi ho skta h
    #prizes; 
    #category;
    #description;
    #rating;

    constructor(productName,productPrize,productcategory,productDescription,productRating){
        this.#name = productName;
        this.#prizes = productPrize;
        this.#category = productcategory;
        this.#description = productDescription;
        this.#rating = productRating;  

    }
    set prize(p){  //2. so "setter" use to change value of private data members inside class  
        if(p>0){
            this.#prizes = p;
        }
        else{
            console.log("Invalid prizes");
        }

    }

    get prize(){  // 3. getter use to get value of data members
        return this.#prizes;

    }
    get description(){   //4. alternative method of defininig getter
        return this.#description;

    }
    set description(d){  //5. alternative method of defininig setter
        if(d.length==0){
            console.log("invalid description");

        }
        else{
            this.#description = d;
        }

    }



}

let iphone = new product("iphone12", 8000,"Mobile","Apple iphone 12",4.5);  
console.log(iphone); 
iphone.prize = -1000; // setter use to set value  
console.log(iphone.prize);  // getter use to get value 
console.log(iphone);
iphone.description="something"  // 6. This called setter function  pass argument to setter function
console.log(iphone.description); //7.  This called getter function


