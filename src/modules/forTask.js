import { counter } from "..";

// Variables for all elemnts
const inputs = document.getElementById('to-add');
const inputBtn = document.getElementById('add');

// Create object for task to be added to array
class MyTasks{
    constructor(description = "", index, completed = false) {
        this.description = description;
        this.index = index;
        this.completed = completed;
    }
};

inputs.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputs.value !== '') {
        const inputVal = inputs.value;
        const task = new MyTasks(inputVal, 1, false);
        const {index, completed} = task;
        
        // Create task elements
        const div = document.createElement('div');
        const innerDiv = document.createElement('div');
        const inputToAdd = document.createElement('input');
        const labelDescription = document.createElement('label');
        const removeBtn = document.createElement('button');
        const trash = document.createElement('i');

        div.setAttribute('id', 'each-task');
        div.classList.add(`item-box${counter + 1}`, `each-task`);
        innerDiv.setAttribute('class', 'inputs');
        inputToAdd.setAttribute('id', 'mark');
        inputToAdd.setAttribute('type', 'checkbox');
        inputToAdd.classList.add(`check${task.index}`, `${task.completed}`, `mark`);
        inputToAdd.setAttribute('name', 'mark');
        inputToAdd.setAttribute('value', 'Check');
        labelDescription.setAttribute('for', 'mark');
        labelDescription.innerHTML = `${task.description}`;
        removeBtn.setAttribute('type', 'button');
        removeBtn.setAttribute('id', 'del');
        trash.classList.add(`fas`, `fa-trash-alt`);
        removeBtn.appendChild(trash);

        innerDiv.appendChild(inputToAdd);
        innerDiv.appendChild(labelDescription);
        div.appendChild(innerDiv);
        div.appendChild(removeBtn);
        console.log(div);
    }
});

export default inputs;