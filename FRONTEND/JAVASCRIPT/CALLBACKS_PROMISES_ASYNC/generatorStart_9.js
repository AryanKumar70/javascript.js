function* myGenerator(){  //1. generator is function which not work exactly like a normal function  jha hmko pause krna ho execution and resume later and produce one value at a time not all value at a time
    console.log("inside generator ");
    yield 100;     // 2. here yield is iterator jo function pause krta need ke according and executing value jiske use ho 
    console.log("line4");
    yield 99;
    console.log("line6");
    yield 50;
    console.log("line8");
    yield -1;
    console.log("line10");

}
const i = myGenerator();
console.log(i.next()); // first yield value that is "100" print and stop uske aaage ka kuch bhi nhi print krega 
console.log("out");
console.log(i.next()); // next yield value "99" is print 
console.log("out");
console.log(i.next()); // 50
console.log("out");
console.log(i.next()); // -1
console.log("out");