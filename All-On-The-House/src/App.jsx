import { useState } from 'react'
import FirstJoinPage from './FirstJoinPage'
import TaskHomescreen from './TaskHomescreen'
import './App.css'

export default function App() {
  const [page, setPage] = useState('join') // 'join' or 'home'

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-4">
      {page === 'join' && <FirstJoinPage onJoin={() => setPage('home')} />}
      {page === 'home' && <TaskHomescreen onBack={() => setPage('join')} />}
  
    <p>Testing CSS</p>
    </div>
  )
}