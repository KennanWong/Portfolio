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
    // width: show ? '99%': '90%',
    // height: show ? '55vh': '50vh',
    width: '80vw',
    height: '55vh',
    backgroundColor: show ? "#ECEBE4": '#DADDD8',
    opacity: show ? '1': '.6',
    borderRadius: show ? '8px':'6px',
    boxShadow: show ? 'rgb(218, 221, 216)' : 'none',
    paddingBottom: '30px',
}))

const DescriptionBox = styled(Box)({
    width: "99%",
    height: "15vh",
})

const Title = styled(Typography)(({active}) => ({
    fontWeight: "900", 
    color: "#1C1C1C", 
    textAlign: 'left',
    transition: 'font-size 0.4s ease-in-out, line-height 0.3s ease-out',
    width: "99%",
    lineHeight: '1.5',
    // animation: active ? 'fadeIn .4s ease-in-out' : 'none',
    // "@keyframes fadeIn": {
    //     "0%": { opacity: "1" },
    //     "25%": {opacity: "20%"},
    //     "50%": { opacity: "20%" },
    //     "75%": {opacity: "20%"},
    //     "100%": { opacity: "1" },
    // },
}))

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
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 100s ease-out', gap: '10px'}}>
                <Title sx= {{
                        fontSize: active ? '35px' : '45px',
                    }}
                    active={active}
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
                                console.log('Hello')
                            }}
                            endIcon={<OpenInNewIcon sx={{fontSize: '30px'}}/>}
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
