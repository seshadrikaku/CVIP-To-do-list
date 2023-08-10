    function HandleSubmit(event) {
    event.preventDefault();
    const textInfo = document.getElementById('taskinfo').value;
    if (textInfo.trim() === "") {
        return alert("Enter Task")
    }


    const newTaskElement = document.createElement("div");
    newTaskElement.className = "task";


    const taskTextElement = document.createElement("p");
    taskTextElement.textContent = textInfo;


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        newTaskElement.remove();
    });


    const updateButton = document.createElement("button");
    updateButton.textContent = "Edit";
    updateButton.addEventListener("click", function () {
        const updatedTaskText = prompt("Update the task:", taskTextElement.textContent);
        if (updatedTaskText !== null && updatedTaskText.trim() !== "") {
            taskTextElement.textContent = updatedTaskText;
        }
    });


    newTaskElement.appendChild(taskTextElement);
    newTaskElement.appendChild(deleteButton);
    newTaskElement.appendChild(updateButton);

    document.getElementById("lists").appendChild(newTaskElement);
    document.getElementById('taskinfo').value = '';
}
