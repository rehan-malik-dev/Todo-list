function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

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
    const newText = prompt("Edit your task:", span.textContent);
    if (newText === '') {
      alert('Please write some thing!');
    }
    else
      span.textContent = newText.trim();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "✕";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(completeBtn);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  list.appendChild(li);
  input.value = "";
}
