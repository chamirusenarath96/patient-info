import React from 'react'
import { Grid } from "@material-ui/core";
import BasicInfo from '../shared/BasicInfo'
import LabsSummary from './Labs/LabsSummary';

const Labs = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BasicInfo/>
                </Grid>
                <Grid item xs={12}>
                    <LabsSummary/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Labs
