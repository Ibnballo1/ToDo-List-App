import inputs from './modules/forTask';
import './style.css';
import getDatas from './modules/local-storage';
import addTasks from './modules/addtasks';
export let counter = 0;
export const todoTasks = [];

const addedItems = document.getElementById('added-items');
getDatas().forEach(() => addTasks());


