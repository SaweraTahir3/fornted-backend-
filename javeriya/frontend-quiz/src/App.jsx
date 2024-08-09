import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Admindashboard from './components/Admindashboard';
import CourseSelection from './components/CourseSelection';
import Startpage from './components/Startpage'
import Login from './components/Login';
import FirstPage from './components/FirstPage';
import Signup from './components/Signup';
import PrivateRoute from "./components/privateroute";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Private Routes */}
        <Route path="/courseSelection" element={<PrivateRoute element={<CourseSelection />} />} />
        <Route path="/quiz" element={<PrivateRoute element={<Quiz />} />} />
        <Route path="/result" element={<PrivateRoute element={<Result />} />} />
        <Route path="/admin" element={<PrivateRoute element={<Admindashboard />} />} />
        <Route path="/start" element={<PrivateRoute element={<Startpage />} />} />
      </Routes>
      <ToastContainer /> {/* Add ToastContainer here */}
    </Router>
  );
};


export default App;



