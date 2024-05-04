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

const AboutMe = styled(Box)({
    textAlign: "start",
    display: "flex",
    color: "#FFFFFF",
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
    backgroundColor: "#FFFFFF",
    gap:  '50px',
    padding: '10px',
    display: 'flex',
    borderRadius: '6px',
    flexDirection: 'column'
})




export default function ExperiencePane2({scrollToDivStart}) {
  return (
    <Box sx={{width:'100%', height: '100vh', paddingTop: '60px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '60px', paddingTop: '100px'}}>
        <AboutMe>
          I'm software engineer looking to build robust solutions and intuitive interfaces to elevate user experiences.
        </AboutMe>
        <Experiences>
              {experienceDetails.map((experience, key) => (
                <Experience key={key} place={experience.place} position={experience.position} fromYear={experience.fromYear} toYear={experience.toYear} summaryPoints={experience.summaryPoints} url={experience.url}/>
              ))}
                
            </Experiences>
      </Box>
      <Box sx={{height: '60px', display:'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingBottom: '100px'}}>
          <BouncingButton scrollToDiv={scrollToDivStart} text={"My Projects"}/>
      </Box>
    </Box>
  );
}
