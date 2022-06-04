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
        }
    }
};

form.addEventListener('submit', addTasks);
inputBtn.addEventListener('click', addTasks);

export default inputs;