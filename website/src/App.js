import React, { useState, useEffect, useRef } from 'react';
import { Box, styled } from '@mui/material';
import './App.css';
import LandingPane from './Panes/LandingPane';
import ExperiencePane2 from './Panes/ExperiencePane2';
import ProjectPane from './Panes/ProjectsPane';
import ContactButton from './Components/ContactButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const PaneColumn = styled(Box) ({
  width: "100%",
  maxWidth: '1500px'
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#ECEBE4'
    },
    secondary: {
      main: '#ECEBE4'
    }
  },
  overrides: {
    MuiSpeedDialAction: {
      staticTooltipLabel: {
        backgroundColor : 'red',
        width : 150,
      },
    },
  },
})


function App() {
  const [showHeader, setShowHeader] = useState(false);
  
  const experienceRef = useRef(null);

  const scrollToExperienceStart = () => {
    setShowHeader(true)
    experienceRef.current.scrollIntoView({ behavior: 'smooth'});
  };

  const projectsRef = useRef(null);

  const scrollToProjectStart = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth'});
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > window.innerHeight) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <LandingPane scrollToDivStart={scrollToExperienceStart} />
        </header>
        <div className="Site-Background">
          <PaneColumn>
            <ContactButton show={showHeader}/>
            <div ref={experienceRef}>
              <ExperiencePane2  scrollToDivStart={scrollToProjectStart}/>
            </div>
            <div ref={projectsRef}>
              <ProjectPane/>
            </div>
          </PaneColumn>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
