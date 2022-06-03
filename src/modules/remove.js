import { todoTasks } from "..";
import { counter } from "..";

function removeTask() {
    // Remove Task After it has been added
    const rmvEachTask = document.getElementsByClassName('rmvBtn');
    for (let i = 0; i < todoTasks.length; i++) {
            todoTasks[i].addEventListener('click', () => {
            //    console.log('I am clicked')
                todoTasks[i].remove();
                //console.log(todoTasks[i]);
            });
            //console.log('Am working')
    }
};

export default removeTask;