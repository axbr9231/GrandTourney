import React from 'react';
import { Dialog, Grow, Button, DialogActions }from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DroppingLetter from './DroppingLetter';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow direction="up" ref={ref} {...props} />;
  });

const styles = {
    matchModal: {
        'overflow-y': 'visible',
    }
};


const MatchModal = (props) => {
  
  const [showWinner, setShowWinner] = React.useState(false)
  const [splitWinner, setSplitWinner] = React.useState([])
  const [winnerInitials, setWinnerInitials] = React.useState('');

  let index = 1;
    

  const handleSplitWinner = (string) => {
    string += ' Progresses!'
    let stringArr = string.split('');
    console.log('stringarray: ', stringArr)
    setSplitWinner(stringArr);
  }

  const handleShowWinnerTop = () => {
    let buttonValue = document.getElementsByClassName('topTeam-wins')
    handleSplitWinner(props.topTeamName);
    setWinnerInitials(props.topTeamName)
    setShowWinner(true)

  }

  const handleShowWinnerBottom = () => {
    let buttonValue = document.getElementsByClassName('bottomTeam-wins')
    handleSplitWinner(props.bottomTeamName);
    setWinnerInitials(props.bottomTeamName)
    setShowWinner(true)

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
                    <div className="modal-winner"><h3 style={{'position': 'absolute'}}>{winnerInitials}</h3></div>
                        <div>
                        <DroppingLetter letters={splitWinner} showWinner={showWinner} index={index} />
                        </div>                 
                  </div>
                  <DialogActions style={{'display': 'flex', 'justifyContent': 'center'}}>
                    <Button onClick={props.closeModal} color="primary">
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
            open={props.isOpen}
            TransitionComponent={Transition}
            transitionDuration={3000}
            keepMounted
            onClose={props.closeModal}
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
