// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ form @@@@@@@@@@@@@@@@@@@@@@@@@@@

let form = document.querySelector("#myform")
let sumitbtn = document.querySelector(".btn")
let input = document.querySelector("#new_input")
// @@@@@@@@@@@@@@@@@@@@@@@@@@@ to domlist @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let  container =document.querySelector(".task_container")
let task1_ele = document.querySelector(".task_element")


// @@@@@@@@@@@@@@@@@@@@@@@ completed @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let completed  =document.querySelector(".completed1")
let task2_completed =document.querySelector(".completed_element")


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    form.addEventListener("submit",(e)=>{
        
        e.preventDefault();
        let task = input.value

if (task.length>=0){
    
let task1 = document.createElement("button")
task1.classList.add("btn1")
task1.type="submit"
task1_ele.append(task1)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

let task_checkbox=document.createElement("input")
task_checkbox.classList.add("checkbox1")
task_checkbox.type="checkbox"
task1.append(task_checkbox)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let task_input = document.createElement("input")
task_input.classList.add("todo_element")
task_input.type="text"
 task_input.value=task;
task1_ele.append(task_input)



let label = document.createElement("label");
    label.htmlFor = "checkbox";

    task_input_element2.setAttribute("readonly", "readonly");
    label.append(task_input_element2);


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let task_edit = document.createElement("button")

task_edit.classList.add("edit")
task_edit.innerText = '\u{1F58A}';
task1_ele.append(task_edit)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let task_delete =document.createElement("button")
task_delete.classList.add("delete")
task_delete.innerText="\u{1F5D1}";
task1_ele.append(task_delete)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

let task2 = document.createElement("button")
task1.classList.add("btn2")
task1.type="submit"
task2_completed.append(task2)


let task2_checkbox=document.createElement("input")
task2_checkbox.classList.add("checkbox2")
task2_checkbox.type="checkbox"
task2.append(task2_checkbox)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let task2_input = document.createElement("input")
task2_input.classList.add("completed_input")
task2_input.type="text"
 task_input.value=task;
 task2_completed.append(task2_input)

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


let task2_edit = document.createElement("button")

task2_edit.classList.add("edit1")
task2_edit.innerText = '\u{1F58A}';
task2_completed.append(task2_edit)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let task2_delete =document.createElement("button")
task2_delete.classList.add("delete1")
task2_delete.innerText="\u{1F5D1}";
task2_completed.append(task2_delete)


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Function @@@@@@@@@@@@@@@@@@@@@@@

//  input.value="";
 
// task_edit.addEventListener("click",(e)){
//     if(task_edit==innerText){

//     }
// }

}
    })






