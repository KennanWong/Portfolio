import { Box, styled } from '@mui/material';
import './App.css';
import React, { useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import ExperiencePane from './Panes/ExperiencePane';
import ProjectPane from './Panes/ProjectsPane';
import LandingPane from './Panes/LandingPane';
import ExperiencePane2 from './Panes/ExperiencePane2';

const IntroText = styled('div')({
  fontSize: "64px",
  fontWeight: "bold"
})

const PaneColumn = styled(Box) ({
  paddingRight: '10px',
  paddingLeft: '10px',
  width: "100%",
  maxWidth: '1500px'
})

function App() {

  const experienceRef = useRef(null);

  const scrollToExperienceStart = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth'});
  };

  const projectsRef = useRef(null);

  const scrollToProjectStart = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth'});
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <LandingPane scrollToDivStart={scrollToExperienceStart}/>
      </header>
      <div className="Site-Background">
        <PaneColumn>
          {/* <div ref={experienceRef}>
          <ExperiencePane  scrollToDivStart={scrollToProjectStart}/>
          </div> */}
          <div ref={experienceRef}>
            <ExperiencePane2  scrollToDivStart={scrollToProjectStart}/>
          </div>
          <div ref={projectsRef}>
            <ProjectPane/>
          </div>
        </PaneColumn>
        
      </div>
    </div>
  );
}

export default App;
