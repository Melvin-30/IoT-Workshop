let TaskInput = document.getElementById("TaskInput");
let Listcontainer = document.getElementById("listcontainer");
let AddTaskBtn = document.getElementById("AddTaskBtn");

AddTaskBtn.addEventListener("click", addTask);
function addTask() {
  let TaskName = TaskInput.value;
  console.log(TaskName);
  if (TaskName == "") {
    alert("Enter Task Name");
  } else {
    let li = document.createElement("li");
    li.textContent = TaskName;
    let CompleteTaskbutton = document.createElement("button");
    CompleteTaskbutton.classList.add("CompleteTaskbutton");
    CompleteTaskbutton.textContent = "Mark as Complete";
    CompleteTaskbutton.onclick = function () {
      li.style.textDecoration = "line-through";
    };
    li.appendChild(CompleteTaskbutton);
    
    let deletebutton = document.createElement("button");
    deletebutton.classList.add("deletebtn");
    deletebutton.textContent = "Delete Task";
    deletebutton.onclick = function () {
      li.remove();
    };
    li.appendChild(deletebutton);
    Listcontainer.appendChild(li);
    TaskInput.value = "";
  }
}
