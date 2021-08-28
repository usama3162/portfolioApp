import { Typography, Grid } from '@material-ui/core'
import React from 'react'
import {Skills as skills} from '../../assets/data'

export default function Skills() {
    return (<>
        <Typography variant="h4" style={{ marginTop: 100, marginBottom: 20}}>My skills</Typography>
        <Grid container spacing={6}>
            {
                skills.map((skill, index) => {
                    return <Grid container item key={index} direction="column" lg={3} md={4} sm={6} xs={12} style = {{cursor : "pointer"}}>
                        <img src={`logos/${skill.src}`} style={{ width: 50, margin: "auto" }} />
                        {skill.title}
                    </Grid>
                })
            }
        </Grid>
    </>);
}