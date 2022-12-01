import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Community from './pages/Community'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<Community />} />
        <Route path="/*" element={<div>Error</div>} />
      </Routes>
    </>
  )
}

export default App
