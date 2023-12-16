import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Base from './components/BaseLayout';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Create from './components/CreatePost';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Base><Home /></Base>} />
            <Route path="/login" element={<Base><Login /></Base>} />
            <Route path="/sign_up" element={<Base><Register /></Base>} />
            <Route path="/create_post" element={<Base><Create /></Base>} />
        </Routes>
    </Router>
  );
}

export default App;
