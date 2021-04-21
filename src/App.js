import './App.css';

import Body from './components/Body/Body';
import Header from './components/Header/header'

import { Container, Grid, makeStyles, Divider, Paper, Typography } from '@material-ui/core'
import TopBar from './components/Header/TopBar';
import NavigationBar from './components/Header/NavigationBar';
import BasicInfo from './components/LeftPane/BasicInfo';
import Navigation from './components/LeftPane/Navigation';

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
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} center>
          <TopBar color="transparent" name="Chamiru" />
          {/* <NavigationBar color="primary" /> */}
        </Grid>
        <Grid xs={4}>
          <Grid xs={12} alignContent='center' justify='center'>
            <BasicInfo />
          </Grid>
          <Grid xs={12}>
            <Navigation />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Body />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}

export default App;
