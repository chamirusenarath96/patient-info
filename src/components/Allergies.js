import React from 'react'
import { Grid } from "@material-ui/core";
import BasicInfo from '../shared/BasicInfo'
import AllergySummary from './Allergies/AllergySummary';

const Allergies = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BasicInfo/>
                </Grid>
                <Grid item xs={12}>
                    <AllergySummary/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Allergies
