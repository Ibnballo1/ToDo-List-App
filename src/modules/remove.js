import { todoTasks } from "..";

function removeTask() {
    // Remove Task After it has been added
    const rmvEachTask = document.getElementsByClassName('rmvBtn');
    for (let i = 0; i < todoTasks.length; i++) {
        todoTasks[i].addEventListener('click', () => {
            todoTasks[i].remove();
            //console.log(todoTasks[i]);
        });
    }
};

export default removeTask;