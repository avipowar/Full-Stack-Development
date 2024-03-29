let todoItemContainer = document.getElementById("todoItemsContainer");

// CREATE TODOES LIST
let todolist = [{
        text: "Leran Html"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JAVASCRIPT"
    },
    {
        text: "Learn Bootstrap"
    }
];

console.log(todolist)

// CREATE A FUNCTION FOR REUSE 
function createAndAppendTodo(todo) {

    // create 1 TO-DO list  
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row")
    todoItemContainer.appendChild(todoElement)

    // CERATE  INPUT ELEMENT 
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    // create div labelContainer element 
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container")
    todoElement.appendChild(labelContainer)

    // create a label element 
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    // create delete icon container 
    let deleteIconCntainer = document.createElement("div");
    deleteIconCntainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconCntainer);

    // delete icon 
    let deleteIcon = document.createElement("i")
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconCntainer.appendChild(deleteIcon)
}

// createAndAppendTodo(todolist[0])
// createAndAppendTodo(todolist[1])
// createAndAppendTodo(todolist[2])

// use for loop and itrate wholw list 
for (let eachTodo of todolist) {
    createAndAppendTodo(eachTodo)
}