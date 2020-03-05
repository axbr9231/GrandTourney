import React from 'react';
import Team from './Team';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';
// import classes from '*.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const styles = {
    matchModal: {
        'overflow-y': 'visible',
    }
};

const MatchModal = (props) => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log('props: ', props)
  return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Slide in alert dialog
        </Button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            className={props.classes.matchModal}
        >
            {/* <DialogContent style={{'width': '500px', 'height': '100px'}}> */}
            <div className="modal-content" style={{'width': '500px', 'height': '200px'}}>
                <div className="modal-team1"></div>
                <h2>Team1 VS Team2</h2>
                <div className="modal-team2"></div>
            </div>
            {/* </DialogContent>  */}
            <DialogActions style={{'display': 'flex', 'justifyContent': 'center'}}>
                <Button onClick={handleClose} color="primary">
                    Team1
                </Button>
                <Button onClick={handleClose} color="primary">
                    Team2
                </Button>
            </DialogActions>
        </Dialog>
      </div>
  )

}
export default withStyles(styles)(MatchModal);
