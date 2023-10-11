// 1.select all the elements that we want
const myform = document.querySelector("#todo-form");
const myinput = document.querySelector("#task");
const mytasks = document.querySelector("#my-tasks");


// 2.make changes to dom
myform.addEventListener('submit',(e)=>{
    e.preventDefault();

    // create task element and add to mytasks
    const newTask = document.createElement("li");
    newTask.innerText = myinput.value;
    newTask.classList.add = "task";
    mytasks.appendChild(newTask);

    // empty the input box
    myinput.value = "";

    // remove task when the task is clicked
    newTask.addEventListener('click',()=>{
        newTask.remove();
    })
    
})