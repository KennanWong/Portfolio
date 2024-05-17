import { Box, Typography, styled } from '@mui/material'
import * as React from 'react'
import Project from '../Components/ProjectDesktop'
import { ProjectDetails } from '../Data/ProjectDetails'
import { Desktop, Mobile } from '../Components/Breakpoints'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ProjectCarousel from '../Components/ProjectCarousel'
import ProjectDesktop from '../Components/ProjectDesktop'

export default function ProjectPane({scrollToDivStart}) {

    const ProjectBox = styled(Box)({
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'flex-start', 
        gap:'40px', 
        width: '100%', 
        alignItems: 'center',
        transition: 'all .2s ease-in',
        height: '400px'
    })

    return (
        <Box>
            <Desktop>
                <Box sx={{height: '100vh', width: '100%', display: 'flex', gap: '20px', flexDirection: 'column'}}>
                    <Typography sx={{fontWeight: '900', fontSize: 48, textAlign: 'left', paddingTop: '60px'}}>
                        Projects.
                    </Typography>
                    <ProjectBox>
                        {ProjectDetails.map((project, key) => (
                            <ProjectDesktop key={key} language={project.language} title={project.title} description={project.description} year={project.year} url={project.url}/>
                        ))}
                    </ProjectBox>
                </Box>
            </Desktop>
            <Mobile>
                <Box sx={{paddingTop: '60px', paddingLeft: '15px', height: '100vh', paddingRight: '15px', display: 'flex', flexDirection: 'column', gap: '20px', boxSizing: 'border-box'}}>
                    <Typography sx={{fontWeight: '900', fontSize: 48, textAlign: 'left', paddingTop: '60px'}}>
                        Projects.
                    </Typography>
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                        <ProjectCarousel/>
                    </Box>
                </Box>
            </Mobile>
        </Box>
    )
}