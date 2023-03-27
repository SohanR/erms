import { Route, Routes } from 'react-router-dom'
import './App.css'
import TeacherLogin from './auth/TeacherLogin'
import Home from './components/Home'
import Nav from './components/Nav'
import CreateAccountForm from './forms/CreateAccountForm'
import EmailVerificationForm from './forms/EmailVerificationForm'
function App() {
  

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/verify" element={<EmailVerificationForm />} />
        <Route path="/teacher/create-account" element={<CreateAccountForm/>} />
      </Routes>

    </div>
  )
}

export default App
