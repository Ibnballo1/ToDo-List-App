import './style.css';

const addedItems = document.getElementById('added-items');
let counter = 0;

let todoTasks = [
    {
        description: 'wash the dishes',
        index: 1,
        completed: false,
    },
    {
        description: 'Complete Todo List Project',
        index: 2,
        completed: false,
    },
    {
        description: 'Code Daily',
        index: 3,
        completed: false
    },
];

// Function to iterate over the task array
const populateTask = todoTasks.forEach((todos)=> {
    const {description, completed, index} = todos;
    const eachTask = `
    <div id="each-task" class="item-box-${counter + 1}">
        <input type="checkbox" id="mark" name="mark" class='check${index} ${completed}' value="Check">
        <label for="mark"> ${description} </label>
        <i class="fas fa-trash-alt"></i>
    </div>
`;
    console.log(eachTask);
    addedItems.insertAdjacentHTML('beforeend', eachTask);
    counter++;
});

populateTask();