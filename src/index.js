import inputs from './modules/forTask';
import './style.css';

const addedItems = document.getElementById('added-items');
export let counter = 0;

export const todoTasks = [];

// Function to iterate over the task array
/*const populateTask = todoTasks.forEach((todos) => {
  const { index } = todos;
  const eachTask = `
    <div id="each-task" class="item-box-${counter + 1} each-task">
        <div class="inputs">
            <input type="checkbox" id="mark" name="mark" class='check${todoTasks[index - 1].index} ${todoTasks[index - 1].completed} mark' value="Check">
            <label for="mark"> ${todoTasks[index - 1].description} </label>
        </div>
        <button type="button" id="del"><i class="fas fa-trash-alt"></i></button>
    </div>
`;

  addedItems.insertAdjacentHTML('beforeend', eachTask);
  counter += 1;
});

populateTask();*/

//todoTasks.push(inputs.value);