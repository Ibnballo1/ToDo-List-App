/*import { counter } from "..";
import { todoTasks } from "..";
import removeTask from "./remove";
import getDatas from "./local-storage";
import addTasks from "./addtasks";
*/
// Variables for all elemnts

/*const inputBtn = document.getElementById('add');
export const addedItemDiv = document.getElementById('added-items');*/

// Create object for task to be added to array
 class MyTasks{
    constructor(taskIndex) {
        this.addedItems = [];
        this.taskIndex = Number(taskIndex);
    }

    formAddItems = (description, index, isCompleted) => {
        const newTask = {
            description: description ?? 'description',
            isCompleted: isCompleted ?? false,
            index: index ?? this.addedItems.length,
            id: this.taskIndex,
        };
        newTask.index += 1;
        this.addedItems.push(newTask);
        this.taskIndex += 1;
        this.setData();
        return newTask;
    };
    addLiTag = (task) => {
        const ul = document.getElementById('addedItems');
        const li = document.createElement('li');
        const checkbox = document.createElement('INPUT');
        const input = document.createElement('INPUT');
        const button = document.createElement('button');
        button.innerHTML = 'remove';
        li.setAttribute('id', `li${task.id}`);
        checkbox.setAttribute('id', `checkbox${task.id}`);
        input.setAttribute('id', `input${task.id}`);
        button.setAttribute('id', `button${task.id}`);
        checkbox.setAttribute('type', 'checkbox');
        input.setAttribute('type', 'text');
        checkbox.checked = task.isCompleted;
        input.value = task.description;
        li.append(checkbox, input, button);
        ul.append(li);
    };
};

form.addEventListener('submit', addTasks);
inputBtn.addEventListener('click', addTasks);

export default inputs;