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
eachList.addedItems = eachList.getData();

if (localStorage.getItem('listName')) {
  listTitle.value = localStorage.getItem('listName');
};

listTitle.addEventListener('input', () => {
  eachList.setListName(listTitle.value);
});

// Populating the data
for (let i = 0; i < eachList.addedItems.length; i += 1) {
  const newTask = eachList.addedItems[i];
  eachList.addLiTag(newTask);
  const description = document.getElementById(`input${newTask.id}`);
  const checkbox = document.getElementById(`checkbox${newTask.id}`);
  const removeButton = document.getElementById(`button${newTask.id}`);
  toAdd.value = '';

  // event listeners:
  removeButton.addEventListener('click', () => {
    eachList.removeEachTask(newTask);
  });
  description.addEventListener('input', () => {
    eachList.updateDescription(description.value, newTask);
  });
  checkbox.addEventListener('change', () => {
      list.updateCheckbox(newTask);
  });
}
  


