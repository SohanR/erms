import { Route, Routes } from 'react-router-dom'
import './App.css'
import TeacherLogin from './auth/TeacherLogin'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/teacher/login" element={<TeacherLogin />} />
      </Routes>

    </div>
  )
}

export default App
