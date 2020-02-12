import React, {useState} from 'react';
import './App.css';
import { Button, TextField, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SetNumTeams = (props) => {

    const [numTeams, SetNumTeams] = useState(0)

    const classes = useStyles();

    return (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="label">Number of Teams</InputLabel>
            <Select labelId="label" id="select" value="20" onChange={props.setTeams}>
              {Array(16).fill(1).map((num, i) => {
                return <MenuItem value={i + 1}>{i + 1}</MenuItem>
              })}
              {/* <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem> */}
            </Select>
            {/* <Button variant="contained" color="primary" onClick={props.setTeams}>Submit</Button> */}
              {/* <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Standard" className="team-input"/>
                  <Button variant="contained" color="primary" onClick={props.setTeams}>Submit</Button>
              </form> */}
          </FormControl>
        </div>
    )
}

export default SetNumTeams;