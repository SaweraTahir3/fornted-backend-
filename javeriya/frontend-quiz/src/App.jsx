import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Admindashboard from './components/Admindashboard';
import CourseSelection from './components/CourseSelection';
import Startpage from './components/Startpage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/courseSelection" element={<CourseSelection />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/admin" element={<Admindashboard />} />
        <Route path="/" element={<Startpage />} />
      </Routes>
    </Router>
  );
};

export default App;



