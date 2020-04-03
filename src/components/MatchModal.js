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

  const topTeamName = props.topTeam ? props.topTeam.name : null;
  const bottomTeamName = props.bottomTeam ? props.bottomTeam.name : null;

  const topInitials = topTeamName ? topTeamName.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('') : null;
  console.log('initials', topInitials) 
  const bottomInitials = bottomTeamName ? bottomTeamName.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('') : null;
  const handleSplitWinner = (string) => {
    string += ' Progresses!'
    let stringArr = string.split('');
    setSplitWinner(stringArr);
  }

  const handleShowWinnerTop = () => {
    
    handleSplitWinner(topTeamName);
    setWinnerInitials(topTeamName);
    props.setWinner(props.topTeam)
    setShowWinner(true)

  }

  const handleShowWinnerBottom = () => {
    
    handleSplitWinner(bottomTeamName);
    setWinnerInitials(bottomTeamName);
    props.setWinner(props.bottomTeam);
    setShowWinner(true)

  }  

  const modalContent = () => {
      if (!showWinner) {
          return (
            <div className="dialog-container">
            <div className="modal-content" style={{'width': '500px', 'height': '200px'}}>
            <div className="modal-team1"><h2 style={{'top': '40px', 'left': '62px', 'position': 'absolute'}}>{topInitials}</h2></div>
                <h2>{topTeamName} VS {bottomTeamName}</h2>
            <div className="modal-team2"><h2 style={{'top': '40px', 'left': '62px', 'position': 'absolute'}}>{bottomInitials}</h2></div>
            </div>
            <DialogActions style={{'display': 'flex', 'justifyContent': 'center'}}>
                <Button onClick={handleShowWinnerTop} color="primary" className="topTeam-wins">
                {topTeamName}
                </Button>
                <Button onClick={handleShowWinnerBottom} color="primary" className="bottomTeam-wins">
                {bottomTeamName}
                </Button>
            </DialogActions>
            </div>
          )
      } else if (showWinner) {
          return (
              <div className="dialog-container">
                  <div className="modal-content" style={{'width': '300px', 'height': '450px'}}>
                    <div className="modal-winner"><h2 style={{'position': 'absolute'}}>{winnerInitials}</h2></div>
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
            transitionDuration={1000}
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
