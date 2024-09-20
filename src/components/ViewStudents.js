import React, { useState, useEffect } from 'react';
import { getStudentsForMentor } from '../api';

function ViewStudents() {
  const [mentorId, setMentorId] = useState('');
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await getStudentsForMentor(mentorId);
      setStudents(response.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
      alert('Failed to fetch students');
    }
  };

  return (
    <div>
      <h2>View Students for Mentor</h2>
      <input 
        type="text"
        placeholder="Enter Mentor ID"
        value={mentorId}
        onChange={(e) => setMentorId(e.target.value)}
      />
      <button onClick={fetchStudents}>View Students</button>
      <ul>
        {students.map(student => <li key={student._id}>{student.name}</li>)}
      </ul>
    </div>
  );
}

export default ViewStudents;
