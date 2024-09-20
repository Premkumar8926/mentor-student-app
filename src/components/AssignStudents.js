import React, { useState, useEffect } from 'react';
import { assignStudentsToMentor, getStudentsWithoutMentor } from '../api';

function AssignStudents() {
  const [mentorId, setMentorId] = useState('');
  const [studentIds, setStudentIds] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students without a mentor
    const fetchStudents = async () => {
      const response = await getStudentsWithoutMentor();
      setStudents(response.data.students);
    };
    fetchStudents();
  }, []);

  const handleAssign = async () => {
    try {
      await assignStudentsToMentor(mentorId, studentIds);
      alert('Students assigned successfully!');
    } catch (error) {
      console.error('Error assigning students:', error);
      alert('Failed to assign students');
    }
  };

  return (
    <div>
      <h2>Assign Students to Mentor</h2>
      <input 
        type="text"
        placeholder="Enter Mentor ID"
        value={mentorId}
        onChange={(e) => setMentorId(e.target.value)}
        required
      />
      <select multiple onChange={(e) => setStudentIds([...e.target.selectedOptions].map(o => o.value))}>
        {students.map(student => (
          <option key={student._id} value={student._id}>{student.name}</option>
        ))}
      </select>
      <button onClick={handleAssign}>Assign Students</button>
    </div>
  );
}

export default AssignStudents;
