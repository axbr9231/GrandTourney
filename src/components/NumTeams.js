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

const NumTeams = (props) => {

    const classes = useStyles();

    return (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="label-id">Number of Teams</InputLabel>
            <Select labelId="label-id" id="select" onChange={props.setNumTeams} className={classes.select}>
              {Array(16).fill(1).map((num, i) => (
                  <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
              ))}
            </Select>
            <Link to='/teams'><Button variant="contained" color="primary">Submit</Button></Link>
          </FormControl>
        </div>
    )
}

export default NumTeams;