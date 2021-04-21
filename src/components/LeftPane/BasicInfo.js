import React from 'react'

import { Button, CardActions, CardContent, Typography, Card, Grid, TopBar, NavigationBar, Divider, Avatar } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'

import avatar from '../../assets/icons/patient.jfif'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        alignContent: 'center',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(3, 0),
    },
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        minWidth: 275
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 3,
        marginLeft: 10
    },
}));

const BasicInfo = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid xs={6}>
                <Avatar src={avatar} className={classes.large} />
            </Grid>
            <Grid xs={6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Ms. Patuie Patel
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Birth Day and Age
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Sex
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Last Visit
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default BasicInfo
