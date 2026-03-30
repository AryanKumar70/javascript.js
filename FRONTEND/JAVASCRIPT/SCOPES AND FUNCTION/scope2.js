var teacher = "Sanket singh";  // Phase-1 me scope define hota h sara formal variable(let,var,const) and function ka mtlb box bn jayega variable name se empty 
function fun(){              // phase-2 me value declare hota h 
    var teacher = "Sarthak";
    console.log("hellow",teacher);

    function gun(){
        var student = "Aryan";
        console.log(student,teacher);

    }
    gun();
}
