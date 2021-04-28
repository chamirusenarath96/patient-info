import React from 'react'
import { Grid } from "@material-ui/core";
import BasicInfo from '../shared/BasicInfo'
import PatientSummary from './ChartSummary/PatientSummary';

const ChartSummary = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BasicInfo/>
                </Grid>
                <Grid item xs={12}>
                    <PatientSummary/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ChartSummary
