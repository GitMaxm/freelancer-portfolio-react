import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '../navabar/NavBar';
import Footer from '../footer/Footer';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Contacts from '../../pages/Contacts';
import Project from '../../pages/Project';
import ScrollToTop from '../../utils/scrollToTob';


function App() {
    return (
        <div className="App">


            <Router>
                <NavBar />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/project/:id' element={<Project />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Routes>

                <Footer />
            </Router>
        </div >
    );
}

export default App;
