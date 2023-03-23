import React, { useState } from 'react';
import TeacherLoginForm from '../forms/TeacherLoginForm';

const TeacherLogin = () => {

    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email} Password: ${password}`);
      };
    
      return (
        <>
            <TeacherLoginForm handleSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        </>
        
      );

    
}

export default TeacherLogin