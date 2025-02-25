var btn = document.getElementById("btn-container");
if(task.value == ""){
    btn.hidden = true;
}
let numbtn=0;

function addtask() {
  var task = document.getElementById("task");
  var del = document.getElementById("btn-del");
  var add = document.getElementById("add");
  var btn = document.getElementById("btn-container");
  var list = document.getElementById("list");

  if (task.value == "") {
    alert("Please Enter Your Task");
    return;
    btn.hidden = true;
  }

  if (task.value) {
    var ul = document.createElement("ul");
     let taskId = `btn_${numbtn}`;
       add.innerHTML += `
                <ul class="ul" id="${taskId}">
                    ${task.value}
                    <button class="btn1" onclick="deltask('${taskId}')">Done</button>
                </ul>
            `;
    numbtn++;
    task.value = "";
  }

  del.addEventListener("click", () => {
    add.innerHTML = "";
    btn.hidden = true;
  });

}

function deltask(id) {

  var list = document.getElementById(id);
  if(list){
    list.remove();
  
  }
  
  
}
