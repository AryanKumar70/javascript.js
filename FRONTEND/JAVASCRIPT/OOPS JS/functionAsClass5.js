function product(n,p,d){ // this is method of defining function constructor without using class here we use normal function to do . 
    this.name = n;
    this.price= p;
    this.description = d;

    this.displayproduct = function(){
        console.log("Name:",this.name,"prices:",this.price , "description:",this.description);
    }
}
let iphone = new product("Iphone165","80000","Apple");
iphone.displayproduct();