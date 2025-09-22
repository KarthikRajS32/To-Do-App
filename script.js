var btn = document.getElementById("btn-container");
if (task.value == "") {
  btn.hidden = true;
}
let numbtn = 0;

function addtask() {
  var task = document.getElementById("task");
  var del = document.getElementById("btn-del");
  var add = document.getElementById("add");
  var btn = document.getElementById("btn-container");

  if (task.value == "") {
    alert("Please Enter Your Task");
    btn.hidden = true; 
    return;
  }

  if (task.value) {
    let taskId = `btn_${numbtn}`;
    add.innerHTML += `
            <ul class="ul" id="${taskId}">
                <span id="value">${task.value}</span> 
                <button class="btn1" onclick="edittask('${taskId}')">Edit</button>
                <button class="btn1" onclick="deltask('${taskId}')">Done</button>
            </ul>
        `;
    numbtn++;
    task.value = "";
  }
}

task.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addtask();
  }
});

function deltask(id) {
  var list = document.getElementById(id);
  if (list) {
    list.remove();
  }
}

function edittask(taskId){
  var id = document.getElementById(taskId);
  var value = document.getElementById("value");
 
  if (!value) return; 

  var editValue = value.textContent;

  id.innerHTML = `<input type="text" id="input_${taskId}" value="${editValue}">
  <button class="btn1" onclick="savetask('${taskId}')">Save</button>`;
}


function savetask(taskId){
  var inputValue =document.getElementById(`input_${taskId}`).value; 
  var id = document.getElementById(taskId);

  id.innerHTML = `<span>${inputValue}</span>
   <button class="btn1" onclick="edittask('${taskId}')">Edit</button>
  <button class="btn1" onclick="deltask('${taskId}')">Done</button>`;
}