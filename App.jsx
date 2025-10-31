import React, { useState } from 'react';

// ToDoForm Component (Part 2)
function ToDoForm({ inputValue, setInputValue, addTask }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={addTask}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          Add
        </button>
      </div>
    </div>
  );
}

// ToDoList Component (Part 2)
function ToDoList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="max-h-96 overflow-y-auto">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No tasks yet. Add one above!</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {tasks.map(task => (
              <li
                key={task.id}
                className="p-4 hover:bg-gray-50 transition-colors flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                />
                <span
                  className={`flex-1 ${
                    task.completed
                      ? 'line-through text-gray-400'
                      : 'text-gray-800'
                  }`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// App Component
export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a ToDo app', completed: false },
    { id: 3, text: 'Master component composition', completed: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
          My ToDo List
        </h1>

        <ToDoForm 
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTask={addTask}
        />

        <ToDoList 
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

        <div className="mt-4 text-center text-gray-600">
          {tasks.filter(t => !t.completed).length} of {tasks.length} tasks remaining
        </div>
      </div>
    </div>
  );
}