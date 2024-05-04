import { Box, Typography, styled } from '@mui/material'
import * as React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ArrowDown = styled(ArrowDownwardIcon)({
    color:'rgba(234, 240, 246, 0.2)',
    transition: 'all 0.2s ease-in-out',
    ":hover": {
        color: "#FFFFFF",
        transform: "scale(1.2)",
        "-webkit-animation-name": "none",
        shadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        cursor: "pointer"
    },
    fontSize: '50px'
})
  
const ButtonGroup = styled(Box)({
    color:'rgba(234, 240, 246, 0.2)',
    transition: 'all 0.2s ease-in-out',
    animation: "bounce 2s ease infinite",
    "@keyframes bounce": {
        "70%": { transform: "translateY(0%)" },
        "80%": { transform: "translateY(-15%)" },
        "90%": { transform: "translateY(0%)" },
        "95%": { transform: "translateY(-7%)" },
        "97%": { transform: "translateY(0%)" },
        "99%": { transform: "translateY(-3%)" },
        "100%": { transform: "translateY(0)" }
    },
    ":hover": {
        cursor: "pointer",
        "-webkit-animation-name": "none",
    },
})

export default function BouncingButton({scrollToDiv, text}) {
    return (
        <ButtonGroup>
            <Typography sx={{fontWeight: 'light', color: 'rgba(234, 240, 246, 0.2)'}}>
                {text}
            </Typography>
            <ArrowDown onClick={scrollToDiv}/>
        </ButtonGroup>
    )
}