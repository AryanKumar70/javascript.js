class Event{  // parents is "Event" jisme dateofEvent prop define h 
    constructor(dateOfEvent){
        this.dateOfEvent = dateOfEvent;

    }
    bookEvent(){
        console.log("booked event");
    }

}
class Movie extends Event{  //1. child is "Movie" jisme only movieName prop define h so parent se inherit krega "movieDate" property by (extends)se 
    constructor(movieName,movieDate){
        super(movieDate); //2. "super" se  we called parents class ka  constructor
        this.movieName =movieName;
    }
}
let dp = new Movie("Deadpool","03-05-2026");
console.log(dp);