let taskBeingEdited = null;

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const addButton = document.querySelector("button");

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // If editing an existing task
  if (taskBeingEdited) {
    taskBeingEdited.querySelector("span").textContent = taskText;
    taskBeingEdited = null;
    input.value = "";
    addButton.textContent = "Add";
    return;
  }

  // Add new task
  const list = document.getElementById("taskList");
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.innerHTML = "✓";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerHTML = "✏️";
  editBtn.onclick = function () {
    input.value = span.textContent;
    taskBeingEdited = li;
    addButton.textContent = "Edit"; // 👈 Now it says "Edit" instead of "Add"
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "✕";
  deleteBtn.onclick = function () {
    li.remove();
    if (taskBeingEdited === li) {
      taskBeingEdited = null;
      input.value = "";
      addButton.textContent = "Add";
    }
  };

  li.appendChild(completeBtn);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  list.appendChild(li);
  input.value = "";
}

document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
