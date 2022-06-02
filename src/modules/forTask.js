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
}