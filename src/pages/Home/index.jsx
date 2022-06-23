import React, {useEffect, useState} from 'react';

import './styles.css';

import { Card } from '../../components/Card';

export function Home() {

  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: ''});

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString('pt-br', {
        dihour: '2-git',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents(prevState => [...prevState, newStudent])

  }

  useEffect(() => {
    fetch("https://api.github.com/users/AlexSchwC")
    .then(res => res.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto de perfil" />
        </div>
      </header>
      <input
        type="text" 
        placeholder='Digite o nome...' 
        onChange={e => setStudentName(e.target.value)}
      />
      <button type='button' onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => (
          <Card
            key={Math.random()} 
            name={student.name} 
            time={student.time}
          />)
        )
      }
      
    </div>
  )
}


