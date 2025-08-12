// src/FirstJoinPage.jsx
export default function FirstJoinPage({ onJoin }) {
  return (
    <div className="w-80 bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-6 shadow-lg">
      <h1 className="text-3xl font-serif mb-4">All on the House!</h1>
      <div className="w-24 h-24 mb-6">
        {/* Simplified circle for roulette */}
        <div className="rounded-full border-8 border-red-700 bg-gradient-to-tr from-yellow-400 via-red-500 to-black w-full h-full flex items-center justify-center text-black font-bold">
          🎯
        </div>
      </div>
      <p className="text-center mb-4">
        Your personal chore casino!<br />
        Create or join a household to get started.
      </p>
      <button
        onClick={() => alert('Create a House')}
        className="bg-gray-700 rounded px-6 py-2 hover:bg-gray-600"
      >
        Create a House
      </button>
      <button
        onClick={onJoin}
        className="bg-gray-700 rounded px-6 py-2 hover:bg-gray-600"
      >
        Join a House
      </button>
      <button
        onClick={() => alert('Learn More')}
        className="bg-green-700 rounded px-6 py-2 hover:bg-green-600"
      >
        Click to Learn More
      </button>
    </div>
  )
}
