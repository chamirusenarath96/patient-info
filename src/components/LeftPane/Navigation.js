import React from 'react'

import { Typography, Tabs, Tab, Box, Grid, TopBar, NavigationBar, Divider } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const Navigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.purple}>CS</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Chart Summary" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.purple}>E</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Encounters" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.purple}>P</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Problems" />
                </ListItem><ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.purple}>A</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Allergies" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.purple}>P</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Procedures" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.purple}>L</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Labs" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>

                        <Avatar className={classes.purple}>N</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Notes" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.purple}>PD</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Patient Documents" />a
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.purple}>A</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Alerts" />
                </ListItem>
            </List>

        </div>
    )
}

export default Navigation
