import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RouterLink from './router/index';
import Navbar from './components/template/Navbar';
import Footer from './components/template/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <RouterLink />
      {/* <Home /> */}
      <Footer />
    </Router>
  );
}

export default App;
