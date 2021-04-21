import React from 'react'

import { Box, makeStyles, Button, Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { positions } from '@material-ui/system';
import MenuIcon from '@material-ui/icons/Menu'

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
    button: {
        marginLeft: "auto"
    }
}));

function TopBar(props) {

    const classes = useStyles();

    return (
        <AppBar position="static" color={props.color}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    Welcome, {props.name}
                </Typography>
                <Box component="span" m={1} className={classes.button}>
                    <Button variant="contained" color="primary" style={{ height: 40 }}> Login </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar
