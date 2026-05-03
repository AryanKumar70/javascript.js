function Event(dateofEvent){     // prototype linking manuualy by using "Object.create()"
    this.dateofEvent = dateofEvent;
}

Event.prototype.bookEvent = function(){
    console.log("booking event");
}

function Movie(name){
    this.name = name;
}
Movie.prototype = Object.create(Event.prototype); //1.(object.create) ka kaam h ki Movie.protype and object.prototype ke bich connection bna dega

c = new Movie("deadpool");
console.log(c.bookEvent());
