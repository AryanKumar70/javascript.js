class Events{ // events bnaye product h jiske prototype me "booking event" h 
    bookEvent(){
        console.log("booking event");
    
    }
}

class Movie extends Events{  // extends mtlb movie ka prototype link to event ke prototype se 
    showtime(){
        console.log("show time");
    }
}
console.log(Movie.prototype.__proto__); // dunder proto use kiye booking event ko access ke liye so pahle movie ke prorotype me check nhi h so ek level up event ke prototype me yha present h 
