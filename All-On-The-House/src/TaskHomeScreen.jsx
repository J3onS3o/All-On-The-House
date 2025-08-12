// src/TaskHomescreen.jsx
export default function TaskHomescreen({ onBack }) {
  // Dummy task list for example
  const tasks = [
    { id: 1, name: 'Take out trash', day: 'Fri', icon: '👨‍🔧' },
    { id: 2, name: 'Vacuum Floor', day: 'Tues', icon: '👩‍🦰' },
    { id: 3, name: 'Wipe Down Kitchen', day: 'Thurs', icon: '👨‍🔧' },
    { id: 4, name: 'Buy Groceries', day: 'Mon', icon: '👩‍🦰' },
  ]

  return (
    <div className="w-80 bg-gray-800 rounded-lg p-6 flex flex-col space-y-6 shadow-lg">
      <header className="flex justify-between items-center border-b border-gray-600 pb-2">
        <div>
          <div className="text-green-400 text-sm">Man Household</div>
          <div className="text-white font-semibold text-lg">Bill Man</div>
        </div>
        <div className="text-white text-sm">Poker ♠️</div>
      </header>

      <h2 className="text-xl font-semibold border-b border-gray-600 pb-2">Task List</h2>

      <ul className="space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between bg-green-700 rounded-md px-4 py-2 items-center"
          >
            <span className="flex items-center space-x-2">
              <span className="text-lg">{task.icon}</span>
              <span>{task.name}</span>
            </span>
            <span className="text-gray-200">{task.day}</span>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <button className="bg-red-700 rounded-lg py-3 font-semibold hover:bg-red-600">
          Assign Tasks
        </button>
        <button className="bg-green-700 rounded-lg py-3 font-semibold hover:bg-green-600">
          Add New Tasks
        </button>
        <button className="bg-yellow-500 rounded-lg py-3 font-semibold hover:bg-yellow-400 text-black">
          Task Calendar
        </button>
        <button className="bg-blue-700 rounded-lg py-3 font-semibold hover:bg-blue-600">
          Completed Tasks
        </button>
      </div>

      <button
        onClick={onBack}
        className="mt-6 text-sm text-gray-400 underline hover:text-gray-200"
      >
        Back to Join Page
      </button>
    </div>
  )
}
