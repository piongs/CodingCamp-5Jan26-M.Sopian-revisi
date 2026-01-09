// Temporary Storage for Todo Items
let todos = [];

// Function to Add Todo Item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (todoInput.value === '' || todoDate.value === '') {
        alert('Please fill in both the todo item and the date.');
        return;
    }

    const newTodo = {
        task: todoInput.value,
        date: todoDate.value
    };

    todos.push(newTodo);
    renderTodos();

    // Clear input fields
    todoInput.value = '';
    todoDate.value = '';
}

// Function to Render Todo Items
function renderTodos(filteredTodos = todos) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    if (filteredTodos.length === 0) {
        todoList.innerHTML = '<li class="text-gray-500">No todos available</li>';
        return;
    }

    filteredTodos.forEach((todo, index) => {
        todoList.innerHTML += `
        <li class="flex justify-between items-center border-b py-2">
            <p class="text-lg">
                ${todo.task}
                <span class="text-sm text-gray-500">(${todo.date})</span>
            </p>
            <button onclick="deleteTodo(${index})"
                class="bg-red-500 text-white px-2 py-1 rounded text-sm">
                Delete
            </button>
        </li>`;
    });
}

// Function to Delete One Todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Function to Remove All Todos
function removeAllTodo() {
    if (confirm('Are you sure you want to delete all todos?')) {
        todos = [];
        renderTodos();
    }
}

// Function to Filter Todo Items (Today)
function filterTodo() {
    const today = new Date().toISOString().split('T')[0];
    const filtered = todos.filter(todo => todo.date === today);
    renderTodos(filtered);
}
