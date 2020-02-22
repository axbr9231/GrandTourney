import React from 'react';
import { useState } from 'react';
import { TextField, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
const TeamSetupForm = ({ id, handleTeamNameChange }) => {

  const classes = useStyles();
  const [teamName, setTeamName] = useState('');


  const updateTeamName = (e) => {
      setTeamName(e.target.value);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error={teamName === ''}
          id={id}
          label="Team Name"
          onChange={(e) => {handleTeamNameChange(parseInt(id), e.target.value)}}
        />
        {/* <label for="myfile" className="team-label">Upload an Image</label>
        <Input type="file" name="myfile" className="team-input"/>    */}
      </div>
      <aside>
      </aside>
    </form>
  );
}


export default TeamSetupForm;