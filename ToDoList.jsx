import React from 'react';

export default function ToDoList({ tasks = [], toggleTask, deleteTask }) {
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