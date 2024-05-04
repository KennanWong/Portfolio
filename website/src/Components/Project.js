import { Box, Typography, styled } from '@mui/material'
import * as React from 'react'

const ProjectBox = styled(Box)({
    width: '370px',
    height: '320px',
    backgroundColor: '#D9D9D9',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all .2s ease-out',
    opacity: '.8',
    ":hover": {
        backgroundColor: "#FFFFFF",
        transform: 'scale(1.1)',
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        opacity: '1',
    },
    
})

export default function Project({language, title, description, year, url}) {
    return (
        <ProjectBox 
            sx={{":hover" : {cursor: (url.length != 0)? 'pointer' : 'auto'}}}
            onClick={() => {
            if (url.length != 0) {
                window.open(url)
            }
        }}>
            <Typography id={"language"} sx={{fontSize: "32px", fontWeight: "900", color: "#BBBBBB", textAlign: 'left'}}>
                {language}
            </Typography>
            <Box>
                <Typography sx={{fontSize: "40px", fontWeight: "900", color: "#000000", textAlign: 'left'}}>
                    {title}
                </Typography>
                <Typography sx={{fontSize: "15px", fontWeight: "normal", color: "#000000", textAlign: 'left'}}>
                    {description}
                </Typography>
            </Box>
            <Typography sx={{fontSize: "20px", fontWeight: "medium", color: "#000000", textAlign: 'left'}}>
                {year}
            </Typography>
        </ProjectBox>
    )
}