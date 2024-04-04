document.addEventListener("DOMContentLoaded", function() {
     loadTasks();
 });
 
 function loadTasks() {
     var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
     var taskList = document.getElementById("taskList");
     taskList.innerHTML = "";
 
     tasks.forEach(function(taskText) {
         var li = createTaskElement(taskText);
         taskList.appendChild(li);
     });
 }
 
 function addTask() {
     var taskInput = document.getElementById("taskInput");
     var taskText = taskInput.value.trim();
 
     if (taskText === "") {
         alert("Please enter a task!");
         return;
     }
 
     var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
     tasks.push(taskText);
     localStorage.setItem("tasks", JSON.stringify(tasks));
 
     var taskList = document.getElementById("taskList");
     var li = createTaskElement(taskText);
     taskList.appendChild(li);
 
     taskInput.value = "";
 }
 
 function createTaskElement(taskText) {
     var li = document.createElement("li");
     li.textContent = taskText;
 
     var deleteButton = document.createElement("span");
     deleteButton.textContent = "❌";
     deleteButton.className = "delete";
     deleteButton.onclick = function() {
         removeTask(taskText);
     };
 
     li.appendChild(deleteButton);
     return li;
 }
 
 function removeTask(taskText) {
     var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
     var index = tasks.indexOf(taskText);
     if (index !== -1) {
         tasks.splice(index, 1);
         localStorage.setItem("tasks", JSON.stringify(tasks));
         loadTasks();
     }
 }
 