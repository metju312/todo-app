export async function getAllTodoElements() {
  const response = await fetch('https://todo-app-2ca83-default-rtdb.europe-west1.firebasedatabase.app/todo-elements.json');
  const data = await response.json();

  const parsedTodoElements = [];

  for(const key in data) {
    parsedTodoElements.push({
      id: key,
      ...data[key]
    })
  }

  return parsedTodoElements;
}

export async function getTodoElementById(id) {
  const todoElements = await getAllTodoElements();
  return todoElements.find(todoElement => todoElement.id === id);
}