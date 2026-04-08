const product = {name:"Iphone",price:"50000",category:"Apple"};
const{name,price,category} = product; // 1. here object destructing is used so frist all keys value are packed but yha obj destruction se 
console.log(name);    //  2. individuals keys ke value ko print krwaa skte h  
console.log(price);
console.log(category);

const purchasedproduct = {orderID:"22bce",orderDate: "11/08/26" , ...product} //3. desturcting one object inside another object 
console.log(purchasedproduct); // 4. mtlb keys value pairs dusre object ka new object me add kr skte h 

const{name:productName , price:productprice , category} = product; // 5.yha alias use kiye mtlb nick name so whi name se output print hoga jiska nickname diye h and rest ka normal name se print hoga
console.log(productName );  //(Iphone)
console.log(productprice);  //(50000)
console.log(category); //(Apple)