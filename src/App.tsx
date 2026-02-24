import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Claude from './pages/Claude'
import Locofy from './pages/Locofy'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/claude" element={<Claude />} />
        <Route path="/locofy" element={<Locofy />} />
      </Routes>
    </Router>
  )
}
