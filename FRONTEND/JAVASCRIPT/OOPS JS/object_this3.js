let obj ={    //"this" in most of case it refer to call site which can be object etc.. (so jo object create kiye whi return as output)
    x:10,     /// in Arrow function this is not refer to call site but resolve using lexical scooping
    y:20,
    fn:function(){
        console.log(this.x,this.y);
    }
}
obj.fn(); //yha 'obj' become call site as it calling the function 'fn' which was "this"