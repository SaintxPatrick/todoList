/** Creator: Patrick Williams
 * Purpose: Simply being used as a notebook as well as practice to convert JavaScript to TypeScript.
 * also allowed me to develop a simple web applcation using JavaScript.
 * Date: 10/28/22 */

/** loaded here is the name of the function, basically when the page is loaded it runs the loaded function. The alternative
 * and cleaner method would be window.addEventListener('load', () => {});  */
window.addEventListener('load', loaded); 

function loaded() {
  /** ! at end expresses it will not be null */
  let form: HTMLElement = document.querySelector("#new-task-form")!;

  /*I realize that TypeScript is smart enough to recognize what type the variable would become, just noting them
  *so I can look back and realize certain types. */
  let input: HTMLElement = document.getElementById("new-task-input")!; 
  let list_el: HTMLElement = document.querySelector("#tasks")!;

  form.addEventListener('submit', (event: any): void => {
    event.preventDefault();
    let task: string = (input as HTMLInputElement).value;    
    let task_el: HTMLDivElement = document.createElement("div");
    task_el.classList.add("task");

    let task_content_el: HTMLDivElement = document.createElement("div");
    task_content_el.classList.add("content")

    let task_input_el: HTMLInputElement = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_el.appendChild(task_content_el);
    task_content_el.appendChild(task_input_el);

    let task_actions_el: HTMLDivElement = document.createElement("div");
    task_actions_el.classList.add("actions")

    let task_edit_el: HTMLButtonElement = document.createElement("button");
    task_edit_el.classList.add("edit")
    task_edit_el.innerHTML = "Edit";

    let task_delete_el: HTMLButtonElement = document.createElement("button");
    task_delete_el.classList.add("delete")
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    task_edit_el.addEventListener('click', () : void => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save"
      }
      else if (task_edit_el.innerText.toLowerCase() == "save") {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    })

    task_delete_el.addEventListener('click', () : void =>  {
      list_el.removeChild(task_el);
    })
  })
}

