const inputText = document.querySelector("#task");
const button = document.querySelector(".add-btn");
const form = document.querySelector("form");
const ul = document.querySelector(".todolist-list-container");

const createTask = (taskText) => {
  if (taskText) {
    return `<div class="list-group">
    <li class="unchecked">${taskText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</li>
    <button class="btn">&#128473;</i></button>
</div>`;
  }
  alert("Empty input!")
};
button.addEventListener("click", (e) => {
  e.preventDefault();
ul.innerHTML += createTask(inputText.value)
form.reset();
});

const completedTasks = ()=>{
    let checkedCount = ul.getElementsByClassName("checked").length;
    let taskCount = ul.getElementsByClassName("list-group").length;
    const checkedTasks = document.getElementById("checkedTasks")
    const allTasks = document.getElementById("allTasks")
    checkedTasks.innerText=checkedCount;
    allTasks.innerText=taskCount;
}

ul.addEventListener("click", e=>{
    if (e.target.classList.contains("btn")) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("unchecked")){
        e.target.className="checked";
    } else {
        e.target.className="unchecked";
    }
    completedTasks()
})