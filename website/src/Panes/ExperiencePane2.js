import * as React from 'react';
import { borderRadius, styled, alpha } from '@mui/system';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Experience from '../Components/Experience';
import { experienceDetails } from '../Data/ExperienceDetails';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BouncingButton from '../Components/BouncingButton';
import { Desktop, Mobile } from '../Components/Breakpoints';

const AboutMe = styled(Box)({
    textAlign: "start",
    display: "flex",
    color: "#ECEBE4",
    font: "Roboto",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "110%",
    width: "60%",
    textWrap: 'pretty',
    borderRadius: '10px',
    boxSizing: 'border-box',
})

const Experiences = styled('div')({
    backgroundColor: "#ECEBE4",
    gap:  '50px',
    padding: '10px',
    display: 'flex',
    borderRadius: '6px',
    flexDirection: 'column'
})




export default function ExperiencePane2({scrollToDivStart}) {
  return (
    <Box >
      <Desktop>
        <Box sx={{width:'100%', height: '100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', scrollSnapAlign: 'start'}}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '60px', paddingTop: '100px'}}>
            <AboutMe>
              I'm a software engineer looking to build robust solutions and intuitive interfaces to elevate user experiences.
            </AboutMe>
            <Experiences>
              {experienceDetails.map((experience, key) => (
                <Experience key={key} place={experience.place} position={experience.position} fromYear={experience.fromYear} toYear={experience.toYear} summaryPoints={experience.summaryPoints} url={experience.url}/>
              ))}
                
            </Experiences>
          </Box>
        </Box>
      </Desktop>
      <Mobile>
        <Box sx={{paddingTop: '60px', paddingLeft: '15px', paddingRight: '15px', display: 'flex', flexDirection: 'column', gap: '20px', boxSizing: 'border-box'}}>
          <AboutMe>
            I'm software engineer looking to build robust solutions and intuitive interfaces to elevate user experiences.
          </AboutMe>
            <Experiences>
              {experienceDetails.map((experience, key) => (
                <Experience key={key} place={experience.place} position={experience.position} fromYear={experience.fromYear} toYear={experience.toYear} summaryPoints={experience.summaryPoints} url={experience.url}/>
              ))}
            </Experiences>
        </Box>
      </Mobile>  
    </Box>
  );
}
