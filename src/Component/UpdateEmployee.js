import React, { useState } from 'react';

const UpdateEmployee = ({ employee, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: employee.name,
    email: employee.email,
    designation: employee.designation
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/employees/${employee.id}`, formData);
      onUpdate(response.data); // Assuming the server returns updated employee data
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="update-employee">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Designation:</label>
        <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
        
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;