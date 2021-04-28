import React from 'react'
import { Grid } from "@material-ui/core";
import BasicInfo from '../shared/BasicInfo'
import EncountersSummary from './Encounters/EncountersSummary'

const Encounters = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BasicInfo/>
                </Grid>
                <Grid item xs={12}>
                    <EncountersSummary />
                </Grid>
            </Grid>
        </div>
    )
}

export default Encounters
