import { counter } from "..";
import { todoTasks } from "..";

// Variables for all elemnts
const form = document.getElementById('form-add-items');
const inputs = document.getElementById('to-add');
const inputBtn = document.getElementById('add');
const addedItemDiv = document.getElementById('added-items');

// Create object for task to be added to array
class MyTasks{
    constructor(description = "", index, completed = false) {
        this.description = description;
        this.index = index;
        this.completed = completed;
    }
};

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
        removeBtn.classList.add(`rmvBtn${counter + 1}`)
        trash.classList.add(`fas`, `fa-trash-alt`);
        removeBtn.appendChild(trash);

        innerDiv.appendChild(checkInput);
        innerDiv.appendChild(labelDescription);
        div.appendChild(innerDiv);
        div.appendChild(removeBtn);
        todoTasks.push(div)
        console.log(todoTasks);
        addedItemDiv.appendChild(div);
    
        
        /*todoTasks.forEach(() => {
            rmvEachTask[index].addEventListener('click', () => console.log(rmvEachTask))
        }, index);*/
    }
}

form.addEventListener('submit', addTasks);
inputBtn.addEventListener('click', addTasks);

export default inputs;