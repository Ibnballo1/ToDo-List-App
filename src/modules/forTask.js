class MyTasks {
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
    const trash = document.createElement('i');
    li.setAttribute('id', `li${task.id}`);
    checkbox.setAttribute('id', `checkbox${task.id}`);
    input.setAttribute('id', `input${task.id}`);
    button.setAttribute('id', `button${task.id}`);
    checkbox.setAttribute('type', 'checkbox');
    input.setAttribute('type', 'text');
    trash.classList.add('fa', 'fa-trash');
    trash.setAttribute('aria-hidden', 'true');
    checkbox.checked = task.isCompleted;
    button.appendChild(trash);
    input.value = task.description;
    li.append(checkbox, input, button);
    ul.append(li);
  };

  removeEachTask = (task) => {
    const ul = document.getElementById('addedItems');
    const index = this.getTaskIndex(task.id);
    const li = document.getElementById(`li${task.id}`);
    this.addedItems.splice(index, 1);
    ul.removeChild(li);
    for (let i = index; i < this.addedItems.length; i += 1) {
      this.addedItems[i].index -= 1;
    }
    this.setData();
  };

  removeDiv = (task) => {
    const ul = document.getElementById('addedItems');
    const index = this.getTaskIndex(task.id);
    const li = document.getElementById(`li${task.id}`);
    ul.removeChild(li);
    for (let i = index; i < this.addedItems.length; i += 1) {
      this.addedItems[i].index -= 1;
    }
  };

  clearTask = (task) => {
    if (task.isCompleted === true) {
      this.removeDiv(task);
      return false;
    }
    return true;
  };

  selectTask = (task) => {
    this.removeHighlight();
    const input = document.getElementById(`input${task.id}`);
    const removeButton = document.getElementById(`button${task.id}`);
    input.classList.add('highlight');
    removeButton.classList.remove('hidden');
  };

  removeHighlight = () => {
    const id = this.findHighlight();
    if (id >= 0) {
      const input = document.getElementById(`input${id}`);
      const removeButton = document.getElementById(`button${id}`);
      input.classList.remove('highlight');
      removeButton.classList.add('hidden');
    }
  };

  findHighlight = () => {
    for (let i = 0; i < this.addedItems.length; i += 1) {
      const { id } = this.addedItems[i];
      const input = document.getElementById(`input${id}`);
      if (input.classList.contains('highlight')) {
        return id;
      }
    }
    return -1;
  };

  updateDescription = (description, task) => {
    task.description = description;
    this.setData();
  };

  updateCheckbox = (task) => {
    task.isCompleted = !task.isCompleted;
    this.setData();
  };

  checkTask = (id) => {
    const description = document.getElementById(`input${id}`);
    description.toggleAttribute('disabled');
    description.classList.toggle('done');
  };

  // local storage
  setData = () => {
    localStorage.setItem('dataTasks', JSON.stringify(this.addedItems));
    localStorage.setItem('dataCount', this.taskIndex);
  };

  getData = () => {
    const getStoredVal = localStorage.getItem('dataTasks');
    if (getStoredVal) {
      return JSON.parse(getStoredVal);
    }
    return [];
  };

  getTaskIndex = (id) => {
    let i = 0;
    while (this.addedItems[i].id !== id) {
      i += 1;
    }
    return i;
  };

  setListName = (newTitle) => {
    localStorage.setItem('listName', newTitle);
  };
}
export default MyTasks;