function Event(dateOfEvent){    // 1.function uses and Date prop Event se lenge and Movie me use krenge by help of "Event.call(this,movieDate)"
        this.dateOfEvent = dateOfEvent;

}
Event.prototype.bookEvent = function(){
    console.log("booking event");
}

function Movie(movieName,movieDate){  
        Event.call(this,movieDate); //2. here using "Event.call" se Event ka this Movie ke this ko point krega and movieDate Event se lega 
        this.movieName = movieName;

}
let dp = new Movie("Deadpool","03-05-2026");
console.log(dp);


