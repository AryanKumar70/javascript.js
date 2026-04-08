const product = {name : "Iphone",discount :"7000", price: "50000", category: {name :"Mobile" ,categoryId : "123"}};
const{discount , ...productwithoutdiscount} = product; // this is rest parameter used so discount is not print in prodwithoutdiscount me  and rest are print inside wihtoudis
console.log(productwithoutdiscount);

function sum(...theArgs){  //2. Rest parameter used so packs the value in one unit whereas Spread parameter unpack the key values pairs
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }
    return total;
}
console.log(sum(1,2,3));