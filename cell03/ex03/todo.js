const listContainer = document.getElementById("ft_list");
var taskArr = [];

function newElement(){
    //promt
    let todoText = prompt("Enter your task: ");
    if (todoText != "")
    {
        createTask(todoText);
        saveTodos();
        //log the task, saved it to local storage
        console.log("Added Task!");
    }
}

function createTask(todoText){
    //create new div with class of task and event on click removeElement()
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.addEventListener("click", removeElement);
    //put text within the new div
    let taskContent = document.createTextNode(todoText);
    newTask.appendChild(taskContent);
    //put the new div into the ft_list container
    listContainer.prepend(newTask);
}

function saveTodos(){
    const savedTodo = JSON.parse(localStorage.getItem("todos")) || [];
    for (const element of listContainer.children){
        savedTodo.push(element.textContent);
    }
    localStorage.setItem("todoItem", JSON.stringify(savedTodo));
}

function removeElement() {
    let isConfirmed = confirm("Remove this from the list?");
    if (isConfirmed){
        this.remove();
        saveTodos();
    }
}

window.onload = () => {
    const savedTodo = JSON.parse(localStorage.getItem("todoItem")) || [];
    for (let i = savedTodo.length - 1; i >= 0; i--){
        createTask(savedTodo[i]);
    }
}