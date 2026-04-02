class product{
    static x =10; // 1.static members are always associated with class (Ex-product) not with object(Ex-p1)

    constructor(name,price){  //2.when code load hua memory me so classes bhi load hua at that time static variable bhi load ho jta h 
        this.name = name;
        this.price = price;

    }
}
// let p1= new product("apple","500000");
// console.log(p1.x); // 3. "p1" is object so static not access with object 
console.log(product.x); // 4. "product" is class so static value is  access with class.