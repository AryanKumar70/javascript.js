const obj = {
    firstName: 'Amit',
    greet: function (welcomeMessage) {
        console.log("hello, my name is", this.firstName, welcomeMessage);
    }
};

const newobj = { firstName: 'sanket' };

// bind does NOT call function immediately
const boundFunc = obj.greet.bind(newobj, "how are you?");  // 1.by using bind it return a function soo obj.greet.bind ek function ke inside likhe h and then wo function return kro so bind ka output print ho jayega
boundFunc();//2.  "boundFunc" ke inside jo this keyword h wo "newobj" ko point krega  ///jbki original "obj.greet" point krega call site ko  