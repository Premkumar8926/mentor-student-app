import axios from 'axios';

const API_URL = 'https://assign-mentor-diln.onrender.com'; // Your Render backend URL

// Mentor API calls
export const createMentor = (mentorName) => axios.post(`${API_URL}/mentor/create`, { name: mentorName });

export const assignStudentsToMentor = (mentorId, studentIds) => 
    axios.post(`${API_URL}/mentor/${mentorId}/assign-students`, { studentIds });

// Student API calls
export const createStudents = (names) => axios.post(`${API_URL}/student/create`, { names });

export const getStudentsWithoutMentor = () => axios.get(`${API_URL}/student/without-mentor`);

export const changeMentorForStudent = (studentId, mentorId) => 
    axios.post(`${API_URL}/student/${studentId}/assign-mentor`, { mentorId });

export const getStudentsForMentor = (mentorId) => axios.get(`${API_URL}/mentor/${mentorId}/students`);
