import { useState } from 'react'
import Header from './component/header/Header';
import Contact from './component/contact/Contact';
import Education from './/component/education/Eduaction';
import Experience from './component/experience/Experience';
import Skills from './component/skills/Skills';
import Footer from './component/footer/Footer';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
    return (
        <div>
            <Header />
            <Contact />
            <Education />
            <Experience />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;

