import React, { useState } from 'react';
import { createStudents } from '../api';

function AddStudent() {
  const [studentNames, setStudentNames] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const namesArray = studentNames.split(',').map(name => name.trim());
    try {
      await createStudents(namesArray);
      alert('Students added successfully!');
      setStudentNames('');
    } catch (error) {
      console.error('Error creating students:', error);
      alert('Failed to add students');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Students</h2>
      <textarea
        value={studentNames}
        onChange={(e) => setStudentNames(e.target.value)}
        placeholder="Enter student names (comma separated)"
        required
      />
      <button type="submit">Add Students</button>
    </form>
  );
}

export default AddStudent;
