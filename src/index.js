/*import inputs from './modules/forTask';*/
import MyTasks from './modules/forTask';
import './style.css';
/*import getDatas from './modules/local-storage';
import addTasks from './modules/addtasks';
import storeData from './modules/local-storage';
export let counter = 0;
export const todoTasks = [];

const addedItems = document.getElementById('added-items');

getDatas();*/

const form = document.getElementById('formAddItems');
const addDescription = document.getElementById('toAdd');
const listTitle = document.getElementById("listTitle");
let dataCount = 0;
const getStorage = localStorage.getItem('dataCount');
if (getStorage) {
    dataCount = getStorage;
}

const eachList = new List(dataCount);


