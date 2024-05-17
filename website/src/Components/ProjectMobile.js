import { Box, Button, Typography, styled } from '@mui/material'
import * as React from 'react'
import Typewriter from './Typewriter'
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Tooltip from '@mui/material/Tooltip';

const ProjectBox = styled(Box)(({show}) => ({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all .3s ease-out',
    width: show ? '88vh': '80vw',
    height: show ? '44vh': '40vh',
    backgroundColor: show ? "#ECEBE4": '#DADDD8',
    opacity: show ? '1': '.6',
    borderRadius: show ? '8px':'6px',
    boxShadow: show ? 'rgb(218, 221, 216)' : 'none',
}))

const DescriptionBox = styled(Box)({
    width: "352px",
    height: "85px",
})

const Title = styled(Typography)({
    fontWeight: "900", 
    color: "#1C1C1C", 
    textAlign: 'left',
    transition: 'font-size 0.3s ease-out, line-height 0.3s ease-out',
    width: "100%",
    lineHeight: '1.5'
    
})

const BottomBar = styled(Box)({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    transition: 'all 0.3s ease-out',
    height: '30px'
})




export default function ProjectMobile({language, title, description, year, url, active}) {
    return (
        <ProjectBox show={active}>
            <Typography id={"language"} sx={{fontSize: "32px", fontWeight: "900", color: "#BBBBBB", textAlign: 'left'}}>
                {language}
            </Typography>
            <Box sx={{width: '100%', height: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 100s ease-out', gap: '10px'}}>
                <Title sx= {{
                        fontSize: active ? '35px' : '45px',
                    }}
                >
                    {title}
                </Title>
                <DescriptionBox sx={{display: active ? 'flex' : 'none' }}>
                    <Typewriter text={description} hovering={active}/>
                </DescriptionBox>
            </Box>
            {(url.length != 0)
                ?   <BottomBar>
                        <Typography sx={{fontSize: "20px", fontWeight: "medium", color: "#1C1C1C", textAlign: 'left'}}>
                            {year}
                        </Typography>
                        <Button 
                            sx={{color: '#1C1C1C', fontFamily: 'monospace'}}
                            onClick={() => {
                                window.open(url)
                            }}
                            endIcon={<OpenInNewIcon sx={{fontSize: active ? '30px' : '0px', transition: 'font-size 0.2s ease-out', textAlign: 'right'}}/>}
                        >
                            View Repo
                        </Button>
                    </BottomBar>
                :   <BottomBar>
                        <Typography sx={{fontSize: "20px", fontWeight: "medium", color: "#1C1C1C", textAlign: 'left'}}>
                            {year}
                        </Typography>
                    </BottomBar>
            }
            
        </ProjectBox>
    )
}
