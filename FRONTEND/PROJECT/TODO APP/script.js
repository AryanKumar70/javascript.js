function loadTodos(){
    // This function will load the todos from the  browser
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todolist": []};
    console.log(todos);
    return todos;
}

function addTodoToLocalStorage(todoText){
    const todos = loadTodos();
    todos.todolist.push(todoText);
    localStorage.setItem("todos" ,JSON.stringify(todos));

}

document.addEventListener("DOMContentLoaded " , () => {
    const todoInput = document.getElementById("todoInput");
    const submitButton =  document.getElementById("addTodo");

    submitButton.addEventListener(() =>{
        const todoText = todoInput.value;
        if(todoText = ''){
            alert("Please Write Something for todo");
        } else{
            addTodoToLocalStorage(todoText);
        }

    });

    todoInput.addEventListener( "change " , (event) =>{
        //this call back method is fired everyrtime there is a change in input tag
        const todoText = event.target.value();
        event.target.value = todoText.trim();
        console.log(event.target.value);

    })
    loadTodos();

});