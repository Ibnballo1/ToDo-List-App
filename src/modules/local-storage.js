import { todoTasks } from "..";
// local storage

/*const getStorage = localStorage.getItem('todoTasks');

// Checking if data are in local storage and getting them
function getDatas() {
  if (getStorage !== null) {
    JSON.parse(getStorage);
  }
}

getDatas();

// set the inputs
function setInputs() {
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
}

todoTasks.addEventListener('load', () => {
  setInputs();
});
*/

const getDatas = () => {
  if (localStorage.getItem('task') !== null) {
    console.log("in the GetItem")
      return (JSON.parse(localStorage.getItem('task')));
  }
  return{};
}

export default getDatas;