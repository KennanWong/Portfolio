import { Box, Typography, styled } from '@mui/material'
import * as React from 'react'
import BouncingButton from '../Components/BouncingButton'
import SocialsBar from '../Components/SocialsBar'
import { Desktop, Mobile } from '../Components/Breakpoints'

const IntroText = styled('div')({
    fontSize: "64px",
    fontWeight: "bold"
  })
export default function LandingPane({scrollToDivStart}) {
    return (
        <>
            <Desktop>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh'}}>
                    <Box>
                    </Box>
                    <Box sx={{display:'flex', flexDirection: 'column', gap: '50px'}}>
                        <div>
                            <IntroText>
                                Hi!  
                            </IntroText>
                            <IntroText>
                                I'm Kennan Wong.  
                            </IntroText>
                        </div>
                        <SocialsBar/>
                    </Box>
                    <Box sx={{height: '60px', marginBottom: '5rem', display:'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <BouncingButton scrollToDiv={scrollToDivStart} text={"Click me!"}/>    
                    </Box>  
                </Box>
            </Desktop>
            <Mobile>
                <Box sx={{display: 'flex', height: '100vh', justifyContent: 'center', flexDirection: 'column', margin: 'auto'}}>
                    <Box sx={{display:'flex', flexDirection: 'column', gap: '50px'}}>
                        <div>
                            <IntroText>
                                Hi!  
                            </IntroText>
                            <IntroText>
                                I'm Kennan Wong.  
                            </IntroText>
                        </div>
                        <SocialsBar/>
                    </Box>
                </Box>
            </Mobile>
        </>
        
    ) 
}