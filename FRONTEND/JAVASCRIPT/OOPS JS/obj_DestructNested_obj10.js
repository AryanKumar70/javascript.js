const product = {name : "Iphone", price: "50000", category: {name :"Mobile" ,categoryId : "123"}}; // 1.here nested object mtlb object 'prod' ke inside "category" object 
const {category} =product;  // 2. M-1 nested object fetching method pahle category then  phir Id
//const {categoryId} = category;
//console.log(categoryId)

const {category :{categoryId}} = product // 3. M-2 nested object fetching method in one line keys ke andar keys ka value achieved
console.log(categoryId)

const Product = {name : "Iphone", price: "60000", category: {name :"Mobile" ,categoryId : "123" , type :{typeid :"55",}}};

