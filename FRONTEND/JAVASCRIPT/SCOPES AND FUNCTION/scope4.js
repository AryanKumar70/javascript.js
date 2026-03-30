var x = 10; // global  
console.log(x,y); // (10,undefined)
if(true){
    var x = 20; // global(as glob ke samne block less priorioy) // 
    var y = 20; // global
    console.log(x,y);   // (20,20)
}


