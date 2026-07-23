function* gen(){
    console.log("inside generator");
    const x = yield 10;
    const y = x + 30;
    yield y;

}

const it = gen();
console.log(it.next());  // {value:10 , done: false} first yield value print so "10"
console.log(it.next(20));  // {value:50 , done :true}  yha parameter bhi de skte h so "20" diye so jha previoue yied tha whi se start to 'x' ka value "20" krdega