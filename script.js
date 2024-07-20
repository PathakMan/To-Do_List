const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const inputValue = todoInput.value.trim();

  if (inputValue) {
    const newTodoItem = document.createElement('li');
    newTodoItem.className = 'todo-item';

    const checkbox = document.createElement('span');
    checkbox.className = 'checkbox';
    newTodoItem.appendChild(checkbox);

    const text = document.createElement('span');
    text.textContent = inputValue;
    newTodoItem.appendChild(text);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    newTodoItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    newTodoItem.appendChild(deleteButton);

    todoList.appendChild(newTodoItem);

    todoInput.value = '';

    editButton.addEventListener('click', () => {
      text.contentEditable = 'true';
      text.focus();
    });

    text.addEventListener('blur', () => {
      text.contentEditable = 'false';
    });

    deleteButton.addEventListener('click', () => {
      todoList.removeChild(newTodoItem);
    });

    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('checked');
      if (checkbox.classList.contains('checked')) {
        
        text.style.textDecoration = 'line-through';
      } else {
        checkbox.style.background = '';
        text.style.textDecoration = 'none';
      }
    });
  }
});