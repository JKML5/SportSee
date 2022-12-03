import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Community from './pages/Community'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className="body">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/community" element={<Community />} />
            <Route path="/*" element={<div>Error</div>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
