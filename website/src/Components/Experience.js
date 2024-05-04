import * as React from "react"
import {styled} from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import CircleIcon from '@mui/icons-material/Circle';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

const Place = styled(Typography)({
    display: 'inline-block',
    textAlign: "start",
    color: "#1D1F22",
    font: "Roboto",
    fontWeight: "bold",
    fontSize: "24pt",
    margin: 0,
    ":hover": {
        cursor: 'pointer',
        textDecoration: 'underline',
    }
})

const Position = styled(Typography)({
    textAlign: "start",
    color: "#1D1F22",
    font: "Roboto",
    fontWeight: "bold",
    fontSize: "15pt",
    lineHeight: "110%",
    margin: 0,
})

const Date = styled(Typography)({
    textAlign: "start",
    color: "#1D1F22",
    font: "Roboto",
    fontWeight: "medium",
    fontSize: "15pt",
    lineHeight: "110%",
    margin: 0,
})

const Point = styled(Typography)({
    textAlign: "start",
    color: "#1D1F22",
    font: "Roboto",
    fontWeight: "400",
    fontSize: "14pt",
    lineHeight: "110%",
})

export default function Experience({place, position, fromYear, toYear, summaryPoints=[], url}) {
    return (
        <Box sx={{ flexGrow: 1, padding: '50px'}}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Box>
                        <Box sx={{display:'flex', width: '100%', justifyContent: 'flex-start'}}>
                            <Place onClick={() => {
                                if (url.length != 0) {
                                    window.open(url)
                                }
                            }}>
                                {place}
                            </Place>
                        </Box>
                        
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                            <Position>
                                {position}
                            </Position>
                            <Divider orientation="vertical" flexItem />
                            <Date>
                                {fromYear} - {toYear}
                            </Date>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{display: 'flex', gap: '20px', flexDirection: 'column', paddingTop: '15px'}}>
                        {summaryPoints.map((point, key) => (
                            <Point>
                                {point}    
                            </Point>
                        ))}
                    </Box> 
                </Grid>
            </Grid>
        </Box>
    )
}