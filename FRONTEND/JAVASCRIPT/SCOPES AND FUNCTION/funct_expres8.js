const arr =[1,2,3,4,5];
arr.map(function f(element) { // map inbuit fun of js / map me fucntion ko pass kiye as argument / and map automatically call krega funct 'f' ko
    console.log("received element",element); // funct 'f' jitna no of elem in arr utna baar call hoga arr ka ek value as parameter leke
}); 

const returnvalue = arr.map(function f(element){
    return element*2; // element mtlb arr ka har elem ko laake return ele*2
})
console.log(returnvalue);

arr.map(function square(element){ // map function ka use ese bhi krskte h 
    return element*element*element;
})
