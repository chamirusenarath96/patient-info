import React from 'react'

import ChartSummary from './components/ChartSummary'
import Encounters from './components/Encounters'
import Problems from './components/Problems'
import Labs from './components/Labs'
import Notes from './components/Notes'
import Procedures from './components/Procedures'
import Allergies from './components/Allergies'


import { NavLink, Switch, Route, Redirect, withRouter } from "react-router-dom";

import {
    Avatar,
    Drawer,
    AppBar,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box, Grid, makeStyles
} from '@material-ui/core'
import { useTheme, withTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { deepOrange } from '@material-ui/core/colors';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",

    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    NavLink: {
        textDecoration: 'none',
        color: "white"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    endBut: {
        marginLeft: "auto",
        [theme.breakpoints.down("sm")]: {
            transform: "scale(0.7)",
        },
    },
}));

const Main = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const themeType = props.theme.palette.type;
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="inherit"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <NavLink className={classes.NavLink} to="/home">Patient Information System</NavLink>
                    </Typography>
                    <Box
                        className={classes.endBut}
                        component={"img"}
                        mt={0}
                        width={100}
                        // src={themeType === "light" ? ward12: Icon}
                        alt="Icon"
                    />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <NavLink className={classes.NavLink} to="/home">
                        <ListItem button>
                            <ListItemIcon>
                            <Avatar className={classes.orange}>CS</Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Chart Summary" />
                        </ListItem>
                    </NavLink>
                    <NavLink className={classes.NavLink} to="/encounters">
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar className={classes.orange}>E</Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Encounters" />
                        </ListItem>
                    </NavLink>
                    <NavLink className={classes.NavLink} to="/problems">
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar className={classes.orange}>P</Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Problems" />
                        </ListItem>
                    </NavLink>
                    <NavLink className={classes.NavLink} to="/allergies">
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar className={classes.orange}>A</Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Allergies" />
                        </ListItem>
                    </NavLink>
                    <NavLink className={classes.NavLink} to="/procedures">
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar className={classes.orange}>P</Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Procedure" />
                        </ListItem>
                    </NavLink>
                    <NavLink className={classes.NavLink} to="/labs">
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar className={classes.orange}>L</Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Labs" />
                        </ListItem>
                    </NavLink>
                    <NavLink className={classes.NavLink} to="/notes">
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar className={classes.orange}>N</Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Notes" />
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path="/home" component={ChartSummary}/>
                    <Route exact path="/encounters" component={Encounters}/>
                    <Route exact path="/problems" component={Problems}/>
                    <Route exact path="/allergies" component={Allergies}/>
                    <Route exact path="/procedures" component={Procedures}/>
                    <Route exact path="/labs" component={Labs}/>
                    <Route exact path="/notes" component={Notes}/>
                    <Redirect to="/home" />
                </Switch>
            </main>
        </>
    );
}

export default withTheme(Main);
