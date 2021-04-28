import React from 'react'
import { Grid } from "@material-ui/core";
import BasicInfo from '../shared/BasicInfo'
import NotesSummary from './Notes/NotesSummary';

const Notes = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BasicInfo/>
                </Grid>
                <Grid item xs={12}>
                    <NotesSummary/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Notes
