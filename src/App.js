import './App.css';
import ResponsiveAppBar from './Component/ResponsiveAppBar';
import SignIn from './Component/SignIn';
import EmployeeForm from './Component/EmployeeForm';
import SignUp from './Component/SignUp';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='/EmployeeForm' element={<EmployeeForm/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/SignIn' element={<SignIn/>} />
      </Routes>
      <h1>Employee Management System</h1>
      <Dashboard />
    </div>
  );
}

export default App;
