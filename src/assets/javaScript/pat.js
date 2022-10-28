window === null || window === void 0 ? void 0 : window.addEventListener('load', loaded); /** loaded here is the name of the function the alternative would be window.addEventListener('load', () => {}); */
function loaded() {
    var form = document.querySelector("#new-task-form"); /** ! at end expresses it will not be null */
    var input = document.getElementById("new-task-input");
    var list_el = document.querySelector("#tasks");
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
        event.preventDefault();
        var task = input.value;
        console.log(task);
        var task_el = document.createElement("div");
        task_el.classList.add("task");
        var task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        var task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
        task_el.appendChild(task_content_el);
        task_content_el.appendChild(task_input_el);
        var task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
        var task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";
        var task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);
        task_edit_el.addEventListener('click', function () {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            }
            else if (task_edit_el.innerText.toLowerCase() == "save") {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });
        task_delete_el.addEventListener('click', function () {
            list_el.removeChild(task_el);
        });
    });
}
