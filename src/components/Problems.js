import React from 'react'
import { Grid } from "@material-ui/core";
import BasicInfo from '../shared/BasicInfo'
import ProblemsSummary from './Problems/ProblemsSummary'

const Problems = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BasicInfo/>
                </Grid>
                <Grid item xs={12}>
                    <ProblemsSummary/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Problems
