import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Employee Dashboard</h1>
      <div className="employee-list">
        {employees.map(employee => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p>Designation: {employee.designation}</p>
            {/* Add options for update and delete */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;