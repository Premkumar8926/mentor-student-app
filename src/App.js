import React from 'react';
import AddMentor from './components/AddMentor';
import AddStudent from './components/AddStudent';
import AssignStudents from './components/AssignStudents';
import ViewStudents from './components/ViewStudents';
import ChangeMentor from './components/ChangeMentor';

function App() {
  return (
    <div>
      <h1>Mentor-Student Management</h1>
      <AddMentor />
      <AddStudent />
      <AssignStudents />
      <ViewStudents />
      <ChangeMentor />
    </div>
  );
}

export default App;
