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
  const [showWinner, setShowWinner] = React.useState(false)
  const [fireWorks, setFireWorks] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleShowWinner = () => {
    setShowWinner(true)
  }

  const handleFireWorks = () => {

  }
 

  const modalContent = () => {
      if (!showWinner) {
          return (
            <div>
            <div className="modal-content" style={{'width': '500px', 'height': '200px'}}>
                <div className="modal-team1"></div>
                <h2>Team1 VS Team2</h2>
                <div className="modal-team2"></div>
            </div>
            <DialogActions style={{'display': 'flex', 'justifyContent': 'center'}}>
                <Button onClick={handleClose} color="primary">
                    Team1
                </Button>
                <Button onClick={handleShowWinner} color="primary">
                    Team2
                </Button>
            </DialogActions>
            </div>
          )
      } else if (showWinner) {
          return (
              <div>
                  <div className="modal-content" style={{'width': '300px', 'height': '450px'}}>
                      <div className="modal-winner"></div>
                      <h2 className="modal-winner-teamName">Team Poo Progresses!</h2>
                  </div>
                  <DialogActions style={{'display': 'flex', 'justifyContent': 'center'}}>
                    <Button onClick={handleClose} color="primary">
                        Continue
                    </Button>
                </DialogActions>
              </div>
          )
      }
  }
  
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
            {modalContent()}
            {/* <div className="modal-content" style={{'width': '500px', 'height': '200px'}}>
                <div className="modal-team1"></div>
                <h2>Team1 VS Team2</h2>
                <div className="modal-team2"></div>
            </div>
            <DialogActions style={{'display': 'flex', 'justifyContent': 'center'}}>
                <Button onClick={handleClose} color="primary">
                    Team1
                </Button>
                <Button onClick={handleClose} color="primary">
                    Team2
                </Button>
            </DialogActions> */}
        </Dialog>
      </div>
  )

}
export default withStyles(styles)(MatchModal);
