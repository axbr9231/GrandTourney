import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
const TeamSetupForm = ({ id }) => {

  const classes = useStyles();
  const [teamName, setTeamName] = useState('');


  const updateTeamName = (e) => {
      setTeamName(e.target.value);
  }
  // if (document.getElementById(id) && teamName === '') {
  //   document.getElementById(id).setAttribute('error', 'true')
  // }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        {/* <TextField error id="standard-error" label="Error" defaultValue="Hello World" /> */}
        <TextField
          error={teamName === ''}
          id={id}
          label="Team Name"
          ErrorText="Enter team name"
          onChange={(e) => {updateTeamName(e)}}
        />
        <label for="myfile" className="team-label">Upload an Image</label>
        <input type="file" id="myfile" name="myfile" className="team-input"/>   
      </div>
      <aside>
      </aside>
    </form>
  );
}


export default TeamSetupForm;