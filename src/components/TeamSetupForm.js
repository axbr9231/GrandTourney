import React from 'react';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
const TeamSetupForm = ({ id, handleTeamNameChange, sendTeamInfo }) => {

  const classes = useStyles();
  const [teamName, setTeamName] = useState('');


  const updateTeamName = (e) => {
      setTeamName(e.target.value);
      handleTeamNameChange(parseInt(id), e.target.value);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error={teamName === ''}
          id={id}
          label="Team Name"
          onChange={updateTeamName}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              document.getElementsByTagName('button')[0].click();
            }
            }}
        />
      </div>
      <aside>
      </aside>
    </form>
  );
}


export default TeamSetupForm;