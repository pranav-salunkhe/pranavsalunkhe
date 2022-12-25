import React from 'react';
import ContactMe from './ContactMe';
import Experience from './Experience';
import Home from './Home';
import Navbar from './Navbar';
import SkillsAndProjects from './SkillsAndProjects';



function App() {
  return (
    <div>
        <Home />
        <Navbar 
        NavbarId = "#Navbar"
        HomeId='#Home'
        SkillsAndProjectsId='#SkillsAndProjects'
        ExperienceId='#Experience'
        ContactMeId='#ContactMe'
        />
        <SkillsAndProjects /> 
        <Experience />
        <ContactMe />
        
    </div>
  );
}

export default App;
