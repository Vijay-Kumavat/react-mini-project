// DeleteEmployee Component
import React from 'react';
import axios from 'axios';

const DeleteEmployee = ({ employee, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/employees/${employee.id}`);
      onDelete(employee.id); // Assuming the server returns the ID of the deleted employee
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="delete-employee">
      <h2>Delete Employee</h2>
      <p>Are you sure you want to delete {employee.name}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteEmployee;
