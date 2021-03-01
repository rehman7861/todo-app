const todoList = document.querySelector(".todo-list");

var toDoList = []; // Array of Object (Store object Value)
var date; // Date Function

// To Do List
function addEvent() {
  dateAdd();

  // Get User Input
  var input = document.getElementById("userInput");
  if (input.value.length <= 2) {
    document.getElementById("userInput") = "";
  }

  // Push User Value
  toDoList.push({
    value: input.value,
    createdAt: date,
    isDone: false
  });

  rerender();

  // For Empty Input
  input.value = "";
}

// Render
function rerender() {
  todoList.innerHTML = "";

  toDoList.map((_todo, index) => {
    // console.log(_todo.isDone)

    // Container Div and Li
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    var newTodo = document.createElement("li");
    newTodo.innerText = _todo.value;
    newTodo.classList.add("todo-item", _todo.isDone ? "doneItems" : null);
    todoDiv.appendChild(newTodo);

    // Show Date
    var todoDate = document.createElement("p");
    todoDate.innerText = _todo.createdAt;
    todoDate.classList.add("todo-date");
    todoDiv.appendChild(todoDate);

    // Edit Button
    var editButton = document.createElement("button");
    editButton.onclick = () => editTodo(index);
    editButton.innerHTML = "<i class='far fa-edit'></i>";
    editButton.classList.add("complete-btn");
    todoDiv.appendChild(editButton);

    // Mark Button
    var completedButton = document.createElement("button");
    completedButton.onclick = () => toggleDone(index);
    completedButton.innerHTML = `<i class='far fa-check-circle ${
      _todo.isDone ? "greenTick" : ""
    }'></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Trash Button
    var trashButton = document.createElement("button");
    trashButton.onclick = () => deleteTodo(index);
    trashButton.innerHTML = "<i class='far fa-trash-alt'></i>";
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
  });
}

// Date Function
function dateAdd() {
  var today = new Date();
  date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
}

// Delete
function deleteTodo(index) {
  toDoList.splice(index, 1);
  rerender();
}

// Edit
function editTodo(index) {
  var newEdit = prompt("Enter New ToDo");
  toDoList[index].value = newEdit;
  rerender();
}

// Done
function toggleDone(index) {
  toDoList[index].isDone = !toDoList[index].isDone;
  rerender();
}
