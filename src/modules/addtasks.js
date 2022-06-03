import { MyTasks } from "./forTask";
import inputs from "./forTask";
import { counter } from "..";
import { todoTasks } from "..";
import { addedItemDiv } from "./forTask";
import removeTask from "./remove";

function addTasks() {
    if (inputs.value !== '') {
        const inputVal = inputs.value;
        const task = new MyTasks(inputVal, 1, false);
        const {index, completed} = task;
        
        // Create task elements
        const div = document.createElement('div');
        const innerDiv = document.createElement('div');
        const checkInput = document.createElement('input');
        const labelDescription = document.createElement('label');
        const removeBtn = document.createElement('button');
        const trash = document.createElement('i');

        div.setAttribute('id', 'each-task');
        div.classList.add(`item-box${counter + 1}`, `each-task`);
        innerDiv.setAttribute('class', 'inputs');
        checkInput.setAttribute('type', 'checkbox');
        checkInput.classList.add(`check${task.index}`, `${task.completed}`, `mark`);
        checkInput.setAttribute('name', 'mark');
        checkInput.setAttribute('value', 'Check');
        checkInput.setAttribute('id', 'mark');
        labelDescription.setAttribute('for', 'mark');
        labelDescription.innerHTML = `${task.description}`;
        removeBtn.setAttribute('type', 'button');
        removeBtn.setAttribute('id', 'del');
        removeBtn.classList.add('rmvBtn')
        trash.classList.add(`fas`, `fa-trash-alt`);
        removeBtn.appendChild(trash);

        innerDiv.appendChild(checkInput);
        innerDiv.appendChild(labelDescription);
        div.appendChild(innerDiv);
        div.appendChild(removeBtn);
        todoTasks.push(div);
        addedItemDiv.appendChild(div);
        
        removeTask();

        // local storage
        const arrObj = Object.assign({}, todoTasks);
        console.log(arrObj);

        // set the inputs
        function setInputs() {
            localStorage.setItem('task', JSON.stringify(arrObj));
        }
        setInputs();
        //console.log(localStorage.setItem('task', JSON.stringify(arrObj)));
        //console.log(JSON.parse(localStorage.getItem('task')));
    }
}

export default addTasks;