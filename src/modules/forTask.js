import { counter } from "..";
import { todoTasks } from "..";
import removeTask from "./remove";
import getDatas from "./local-storage";
import addTasks from "./addtasks";

// Variables for all elemnts
const form = document.getElementById('form-add-items');
export const inputs = document.getElementById('to-add');
const inputBtn = document.getElementById('add');
export const addedItemDiv = document.getElementById('added-items');

// Create object for task to be added to array
 export class MyTasks{
    constructor(description = "", index, completed = false) {
        this.description = description;
        this.index = index;
        this.completed = completed;
    }
};

form.addEventListener('submit', addTasks);
inputBtn.addEventListener('click', addTasks);

export default inputs;