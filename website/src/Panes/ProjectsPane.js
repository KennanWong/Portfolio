import { Box, Typography } from '@mui/material'
import * as React from 'react'
import Project from '../Components/Project'
import { ProjectDetails } from '../Data/ProjectDetails'


export default function ProjectPane({scrollToDivStart}) {
    return (
        <Box sx={{height: '100vh', width: '100%', display: 'flex', gap: '20px', flexDirection: 'column'}}>
            <Typography sx={{fontWeight: '900', fontSize: 48, textAlign: 'left', paddingTop: '60px'}}>
                Projects.
            </Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap:'40px', width: '100%'}}>
                {ProjectDetails.map((project, key) => (
                    <Project key={key} language={project.language} title={project.title} description={project.description} year={project.year} url={project.url}/>
                ))}
            </Box>
        </Box>
        
    )
}