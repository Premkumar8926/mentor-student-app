import React, { useState } from 'react';
import { createMentor } from '../api';

function AddMentor() {
  const [mentorName, setMentorName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMentor(mentorName);
      alert('Mentor added successfully!');
      setMentorName('');
    } catch (error) {
      console.error('Error creating mentor:', error);
      alert('Failed to create mentor');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Mentor</h2>
      <input 
        type="text"
        value={mentorName}
        onChange={(e) => setMentorName(e.target.value)}
        placeholder="Enter mentor name"
        required
      />
      <button type="submit">Add Mentor</button>
    </form>
  );
}

export default AddMentor;
