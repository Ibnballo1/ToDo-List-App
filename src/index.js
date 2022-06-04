import './style.css';
import MyTasks from './modules/forTask.js';

const formAddItems = document.getElementById('formAddItems');
const addDescription = document.getElementById('toAdd');
const listTitle = document.getElementById('listTitle');
const clearTask = document.getElementById('clearTask');

let dataCount = 0;
const getStorage = localStorage.getItem('dataCount');
if (getStorage) {
  dataCount = getStorage;
}

const eachList = new MyTasks(dataCount);
eachList.addedItems = eachList.getData();

if (localStorage.getItem('listName')) {
  listTitle.value = localStorage.getItem('listName');
}

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
  if (newTask.isCompleted) eachList.checkTask(newTask.id);

  // event listeners:
  removeButton.addEventListener('click', () => {
    eachList.removeEachTask(newTask);
  });
  description.addEventListener('input', () => {
    eachList.updateDescription(description.value, newTask);
  });
  description.addEventListener('click', () => {
    eachList.selectTask(newTask);
  });
  description.addEventListener('keydown', () => {
    eachList.selectTask(newTask);
  });
  checkbox.addEventListener('change', () => {
    eachList.updateCheckbox(newTask);
    eachList.checkTask(newTask.id);
  });
}

formAddItems.addEventListener('submit', () => {
  const newTask = eachList.formAddItems(addDescription.value);
  eachList.addLiTag(eachList.addedItems[eachList.addedItems.length - 1]);
  const description = document.getElementById(`input${eachList.taskIndex - 1}`);
  const checkbox = document.getElementById(`checkbox${eachList.taskIndex - 1}`);
  const removeButton = document.getElementById(`button${eachList.taskIndex - 1}`);
  addDescription.value = '';
  // event listeners:
  removeButton.addEventListener('click', () => {
    eachList.removeEachTask(newTask);
  });
  description.addEventListener('input', () => {
    eachList.updateDescription(description.value, newTask);
  });
  description.addEventListener('click', () => {
    eachList.selectTask(newTask);
  });
  description.addEventListener('keydown', () => {
    eachList.selectTask(newTask);
  });
  checkbox.addEventListener('change', () => {
    eachList.updateCheckbox(newTask);
    eachList.checkTask(newTask.id);
  });
});

clearTask.addEventListener('click', () => {
  eachList.addedItems = eachList.addedItems.filter(eachList.clearTask);
  eachList.setData();
});

listTitle.addEventListener('click', () => {
  eachList.removeHighlight();
});
formAddItems.addEventListener('click', () => {
  eachList.removeHighlight();
});