import { Box, Typography, styled } from '@mui/material'
import * as React from 'react'
import Typewriter from './Typewriter'
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Tooltip from '@mui/material/Tooltip';

const ProjectBox = styled(Box)({
    width: '370px',
    height: '320px',
    backgroundColor: '#DADDD8',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all .2s ease-out',
    opacity: '.8',
    ":hover": {
        backgroundColor: "#ECEBE4",
        width: '407px',
        height: '352px',
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        opacity: '1',
        borderRadius: '8px'
    },
    borderRadius: '6px'
})

const DescriptionBox = styled(Box)({
    width: "352px",
    height: "85px",
})

const Title = styled(Typography)({
    fontWeight: "900", 
    color: "#1C1C1C", 
    textAlign: 'left',
    transition: 'font-size 0.2s ease-out    , line-height 0.3s ease-out',
    width: "100%",
    lineHeight: '1.5'
    
})

const BottomBar = styled(Box)({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    transition: 'all 0.2s ease-in-out',
    height: '30px'
})

const GrowingButton = styled(IconButton)({
    transition: 'font-size 0.2s ease-in',
})


export default function ProjectDesktop({language, title, description, year, url}) {
    const [hovering, setHovering] = React.useState(false)

    return (
        <ProjectBox 
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <Typography id={"language"} sx={{fontSize: "32px", fontWeight: "900", color: "#BBBBBB", textAlign: 'left'}}>
                {language}
            </Typography>
            <Box sx={{width: '320px', height: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 100s ease-out', gap: '10px'}}>
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
            <BottomBar>
                <Typography sx={{fontSize: "20px", fontWeight: "medium", color: "#1C1C1C", textAlign: 'left'}}>
                    {year}
                </Typography>
                <Tooltip title="Checkout the repo">
                    <GrowingButton 
                        sx={{display: (url.length != 0) ? 'flex' : 'none'}}
                        onClick={() => {
                            if (url.length != 0) {
                                window.open(url)
                            }
                        }}
                    >
                        <OpenInNewIcon sx={{fontSize: hovering ? '30px' : '0px', transition: 'font-size 0.2s ease-out', textAlign: 'right'}}/>
                    </GrowingButton>
                </Tooltip>
            </BottomBar>
        </ProjectBox>
    )
}
