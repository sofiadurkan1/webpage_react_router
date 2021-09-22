import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
        marginRight: theme.spacing(80),
      },
    
    title: {
      flexGrow: 1,
    },
    wrapper: {
        backgroundColor: "#383838",
        color: "#fff"
    }
  }));





export default function Navbar() {
    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" className={classes.wrapper} >
        <Toolbar>
         
          <Typography variant="h5" className={classes.button} component="div" sx={{ flexGrow: 1 }}>
           <span>Clarusway </span> Web Design
           
          </Typography>
          <Button color="inherit" >HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">SERVICES</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}