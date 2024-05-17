import { Box, Divider, IconButton, Typography, styled } from '@mui/material'
import * as React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialsBarContainer = styled(Box)({
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
})

const IconHolder = styled(Box)({
    display: 'flex',
    gap: '30px',
    transition: 'all 0.2s ease-in-out'
})

export default function SocialsBar({}) {
    return (
        <SocialsBarContainer>
            <IconHolder>
                <IconButton onClick={() => {window.open("https://www.linkedin.com/in/kennanw/")}}>
                    <LinkedInIcon sx={{fontSize: 50, color: '#ECEBE4'}} />
                </IconButton>
                <Divider orientation="vertical" flexItem/>
                <IconButton onClick={() => {window.open("https://github.com/KennanWong")}}>   
                    <GitHubIcon sx={{fontSize: 50, color: '#ECEBE4'}} />
                </IconButton>
            </IconHolder>
        </SocialsBarContainer>
    )
}