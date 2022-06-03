import { todoTasks } from "..";
import { counter } from "..";
import getDatas from "./local-storage";

function removeTask() {
    // Remove Task After it has been added
    const rmvEachTask = document.getElementsByClassName('rmvBtn');
    for (let i = 0; i < todoTasks.length; i++) {
        todoTasks[i].querySelector('.rmvBtn').addEventListener('click', () => {
            todoTasks[i].remove().getDatas();
        });
    }
};

export default removeTask;