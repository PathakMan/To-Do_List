const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

let todoItems = [];

// Load existing todo items from local storage
if (localStorage.getItem('todoItems')) {
  todoItems = JSON.parse(localStorage.getItem('todoItems'));
  todoItems.forEach((item) => {
    const newTodoItem = document.createElement('li');
    newTodoItem.className = 'todo-item';

    const checkbox = document.createElement('span');
    checkbox.className = 'checkbox';
    newTodoItem.appendChild(checkbox);

    const text = document.createElement('span');
    text.textContent = item.text;
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

    // Add event listeners for edit and delete buttons
    editButton.addEventListener('click', () => {
      text.contentEditable = 'true';
      text.focus();
    });

    text.addEventListener('blur', () => {
      text.contentEditable = 'false';
    });

    deleteButton.addEventListener('click', () => {
      todoList.removeChild(newTodoItem);
      todoItems = todoItems.filter((todoItem) => todoItem.text !== item.text);
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
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
  });
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const inputValue = todoInput.value.trim();

  if (inputValue) {
    const newTodoItem = {
      text: inputValue,
      completed: false,
    };

    todoItems.push(newTodoItem);

    localStorage.setItem('todoItems', JSON.stringify(todoItems));

    const newTodoItemElement = document.createElement('li');
    newTodoItemElement.className = 'todo-item';

    const checkbox = document.createElement('span');
    checkbox.className = 'checkbox';
    newTodoItemElement.appendChild(checkbox);

    const text = document.createElement('span');
    text.textContent = inputValue;
    newTodoItemElement.appendChild(text);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    newTodoItemElement.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    newTodoItemElement.appendChild(deleteButton);

    todoList.appendChild(newTodoItemElement);

    todoInput.value = '';

    // Add event listeners for edit and delete buttons
    editButton.addEventListener('click', () => {
      text.contentEditable = 'true';
      text.focus();
    });

    text.addEventListener('blur', () => {
      text.contentEditable = 'false';
    });

    deleteButton.addEventListener('click', () => {
      todoList.removeChild(newTodoItemElement);
      todoItems = todoItems.filter((todoItem) => todoItem.text !== inputValue);
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
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