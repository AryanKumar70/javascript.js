function product(n){
    this.name = n;
    this.display = function(){console.log(this);} // 1.yha display plain object pr hi point kr rha h this wla product ke prototype pr gya hi nhi

}

p = new product("iphone");


function product(n){
    this.name = n;
}
product.prototype.display = function(){console.log(this);} //2. yha ab display product ke prototype pr point kr tha h no point to new plain object "p"
console.log(product.prototype);
p = new product("iphone");
