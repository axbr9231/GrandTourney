import React from 'react';
import { useEffect, useState } from 'react';
import Team from './Team';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';
import DroppingLetter from './DroppingLetter';


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
  const [splitWinner, setSplitWinner] = React.useState([])
 



  let index = 1;
    

  const testWinner = 'Team Poo'
  const handleSplitWinner = (string) => {
    string += ' Progresses!'
    let stringArr = string.split('');
    console.log(stringArr)
    setSplitWinner(stringArr.slice());
  }

  const handleClickOpen = () => {
    setOpen(props.isOpen);
  };

  const handleClose = () => {
      setOpen(props.isOpen);
      setTimeout(() => {setShowWinner(false)}, 200)
  };

  const handleShowWinnerTop = () => {
    let buttonValue = document.getElementsByClassName('topTeam-wins')
    handleSplitWinner(buttonValue.Value);

    setShowWinner(true)

  }

  const handleShowWinnerBottom = () => {
    let buttonValue = document.getElementsByClassName('bottomTeam-wins')
    handleSplitWinner(buttonValue.Value);

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
                <h2>{props.topTeamName} VS {props.bottomTeamName}</h2>
                <div className="modal-team2"></div>
            </div>
            <DialogActions style={{'display': 'flex', 'justifyContent': 'center'}}>
                <Button onClick={handleShowWinnerTop} color="primary" className="topTeam-wins">
                {props.topTeamName}
                </Button>
                <Button onClick={handleShowWinnerBottom} color="primary" className="bottomTeam-wins">
                {props.bottomTeamName}
                </Button>
            </DialogActions>
            </div>
          )
      } else if (showWinner) {
          return (
              <div>
                  <div className="modal-content" style={{'width': '300px', 'height': '450px'}}>
                      <div className="modal-winner"></div>
                        <div>
                        <DroppingLetter letters={splitWinner} showWinner={showWinner} index={index} />
                        </div>                 
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
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Slide in alert dialog
        </Button> */}
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
        </Dialog>
      </div>
  )

}
export default withStyles(styles)(MatchModal);
