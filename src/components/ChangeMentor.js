import React, { useState } from 'react';
import { changeMentorForStudent } from '../api';

function ChangeMentor() {
  const [studentId, setStudentId] = useState('');
  const [mentorId, setMentorId] = useState('');

  const handleSubmit = async () => {
    try {
      await changeMentorForStudent(studentId, mentorId);
      alert('Mentor changed successfully!');
    } catch (error) {
      console.error('Error changing mentor:', error);
      alert('Failed to change mentor');
    }
  };

  return (
    <div>
      <h2>Change Mentor for Student</h2>
      <input 
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input 
        type="text"
        placeholder="Enter New Mentor ID"
        value={mentorId}
        onChange={(e) => setMentorId(e.target.value)}
      />
      <button onClick={handleSubmit}>Change Mentor</button>
    </div>
  );
}

export default ChangeMentor;
