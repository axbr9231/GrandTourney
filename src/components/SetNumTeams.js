import React from 'react';
import '../App.css';
import { Button, TextField, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    width: '150px'
  }
}));

const SetNumTeams = (props) => {

    const classes = useStyles();

    return (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="label-id">Number of Teams</InputLabel>
            <Select labelId="label-id" id="select" onChange={props.setTeams} className={classes.select}>
              {Array(16).fill(1).map((num, i) => (
                // <Link to='/teams'>
                  <MenuItem value={i + 1}>{i + 1}</MenuItem>
                // </Link>
              ))}
              {/* <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem> */}
            </Select>
            <Link to='/teams'><Button variant="contained" color="primary">Submit</Button></Link>
              {/* <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Standard" className="team-input"/>
                  <Button variant="contained" color="primary" onClick={props.setTeams}>Submit</Button>
              </form> */}
          </FormControl>
        </div>
    )
}

export default SetNumTeams;