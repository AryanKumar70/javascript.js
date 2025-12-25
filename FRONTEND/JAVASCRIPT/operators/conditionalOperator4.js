console.log("Starting...");
let isUserSignedIn = true;
let isPaidUser = false;
if(isUserSignedIn == true && isPaidUser == true){   // using ("if" ,"else") conditional operator
    console.log("Show the dashboard");
} else {
    console.log("Show The Homepage");
}
console.log("End...");

let usersubscription = "premium";

if(usersubscription == "unsubscribed"){  // using ("if" and "else if") agar multiple condition more than 2 so use this 
    console.log("Show pricing Page");
} else if(usersubscription == "Super"){
    console.log("only hindi content");
}else if(usersubscription == "premium"){
    console.log("Show all content");
}
console.log("End...");

let isUserSubscribed = true;
let userHasLionGatesPlay = false;
let userHasSony = true;
if(isUserSubscribed){
    if(userHasLionGatesPlay){
        console.log("Watch john wick");
    } else if(userHasSony){
        console.log("Show the guardian");
    } else {
        console.log("Show Panchayat");
    }
}




