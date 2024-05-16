import { Box, Typography, styled } from '@mui/material'
import * as React from 'react'
import Typewriter from './Typewriter'

const ProjectBox = styled(Box)({
    width: '370px',
    height: '320px',
    backgroundColor: '#D9D9D9',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all .1s ease-out',
    opacity: '.8',
    ":hover": {
        backgroundColor: "#FFFFFF",
        width: '407px',
        height: '352px',
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        opacity: '1',
    },
    borderRadius: '6px'
})

const DescriptionBox = styled(Box)({
    width: "352px",
    height: "85px",
    transition: 'all 0.2s ease-out',
    transitionDelay: '0.5s',
})

const Title = styled(Typography)({
    fontWeight: "900", 
    color: "#000000", 
    textAlign: 'left',
    transition: 'font-size 0.2s ease-out, line-height 0.3s ease-out',
    width: "100%",
    
})


export default function Project({language, title, description, year, url}) {
    const [hovering, setHovering] = React.useState(false)

    return (
        <ProjectBox 
            sx={{":hover" : {cursor: (url.length != 0)? 'pointer' : 'auto'}}}
            onClick={() => {
                if (url.length != 0) {
                    window.open(url)
                }
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <Typography id={"language"} sx={{fontSize: "32px", fontWeight: "900", color: "#BBBBBB", textAlign: 'left'}}>
                {language}
            </Typography>
            <Box sx={{width: '320px', height: '230px', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 100s ease-out', gap: '10px'}}>
                <Title sx= {{
                        fontSize: hovering ? '35px' : '45px',
                    }}
                >
                    {title}
                </Title>
                <DescriptionBox sx={{display: hovering ? 'flex' : 'none' }}>
                    <Typewriter text={description} hovering={hovering}/>
                </DescriptionBox>
            </Box>
            <Typography sx={{fontSize: "20px", fontWeight: "medium", color: "#000000", textAlign: 'left'}}>
                {year}
            </Typography>
        </ProjectBox>
    )
}