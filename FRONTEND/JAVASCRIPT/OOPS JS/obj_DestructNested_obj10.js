const product = {name : "Iphone", price: "50000", category: {name :"Mobile" ,categoryId : "123"}}; // 1.here nested object mtlb object 'prod' ke inside "category" object 
const {category} =product;  // 2. M-1 nested object fetching method pahle category then  phir Id
//const {categoryId} = category;
//console.log(categoryId)

const {category :{categoryId}} = product // 3. M-2 nested object fetching method in one line keys ke andar keys ka value achieved
console.log(categoryId)

const Product = {name : "Iphone", price: "60000", category: {name :"Mobile" ,categoryId : "123" , type :{typeid :"55",}}};

const result = {...o1 ,...o2 ,...o3}; //3. multiple object ko combine in new one we use ("Spread operator(...)") 
const clone = {...o1}; //4. if we need clone o1 object into clone variable  we use spread operator 
const clone = {...o1 ,keyToupdated :values}; // 5. if we want to update value of object and create new one at same time so use "spread param"
const {name , discount = 10}= product;  //6. we can give default value while destructing objects (agar prod not contain discount key so disc variable get value of 10 else it return product disc values)