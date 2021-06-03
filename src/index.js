
document.addEventListener("DOMContentLoaded", () => {
  
const form =document.getElementById("create-task-form");
const input=document.getElementById("new-task-description");
const div = document.getElementById("list");
const ul = document.getElementById("tasks");

form.addEventListener("submit", function make(e){
  e.preventDefault();
 let li=document.createElement('li');
      li.innerHTML =input.value;
      ul.appendChild(li);
})
});