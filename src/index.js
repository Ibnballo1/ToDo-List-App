import './style.css';

const addedItems = 

let todoTasks = [
    {
        description: 'wash the dishes',
        index: 1,
        completed: false,
    },
    {
        description: 'Complete Todo List Project',
        index: 2,
        completed: true,
    },
    {
        description: 'Code Daily',
        index: 3,
        completed: false
    },
];

// Function to iterate over the task array
const eachTask = todoTasks.forEach(()=> {
    const div = document.createElement('div');
    console.log(div)
});

eachTask();