// "use strict";     (ye autoglobal mode ko stop krta h) 
var teacher = "Sanket singh";  // phase-1 (global)
function fun(){     // ph-1 (global)          
    var teacher = "Sarthak"; // ph-1 (fun scope)
    content = "JS";  // autoglobal bna dega when no formal(let,var,const) used bcoz print hone ke liye last me 
    console.log("wow", content, teacher);

}
console.log(teacher);
//console.log(content);
fun();