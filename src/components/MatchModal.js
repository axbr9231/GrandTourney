import React from 'react';
import { Dialog, Grow, Button, DialogActions }from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DroppingLetter from './DroppingLetter';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const TopTeamContainer = styled.div`
  border-radius: 100%;
  background-color: #202a3f;
  z-index: 1;
  position: absolute;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BottomTeamContainer = styled.div`
  border-radius: 100%;
  background-color: #202a3f;
  z-index: 1;
  position: absolute;
  overflow: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
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
  const [hoverTop, setHoverTop] = React.useState(false);
  const [hoverBottom, setHoverBottom] = React.useState(false);

  const AnimatedTopTeam = animated(TopTeamContainer);
  const AnimatedBottomTeam = animated(BottomTeamContainer);
  
  const propsTop = useSpring({
    height: hoverTop ? '180px' : '150px',
    width: hoverTop ? '180px' : '150px',
    left : hoverTop ? '-60px' : '-40px',
    top: hoverTop ? '-60px' : '-40px',
    boxShadow: hoverTop ? '0px 0px 15px 20px #0be9e9' : '0px 0px 15px 5px #0be9e9'
  })
  const propsBottom = useSpring({
    height: hoverBottom ? '180px' : '150px',
    width: hoverBottom ? '180px' : '150px',
    right : hoverBottom ? '-60px' : '-40px',
    bottom: hoverBottom ? '-60px' : '-40px',
    boxShadow: hoverBottom ? '0px 0px 15px 20px #0be9e9' : '0px 0px 15px 5px #0be9e9'
  })

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
            <AnimatedTopTeam  style={propsTop}
            onClick={handleShowWinnerTop}
            onMouseOver={() => {setHoverTop(true)}}
            onMouseOut={() => {setHoverTop(false)}}
            ><h2>{topInitials}</h2></AnimatedTopTeam>
                <h2>{topTeamName} VS {bottomTeamName}</h2>
            <AnimatedBottomTeam  style={propsBottom}
            onClick={handleShowWinnerBottom}
            onMouseOver={() => {setHoverBottom(true)}}
            onMouseOut={() => {setHoverBottom(false)}}
            ><h2>{bottomInitials}</h2></AnimatedBottomTeam>
            </div>
            <DialogActions style={{'display': 'flex', 'justifyContent': 'center'}}>
                {/* <Button onClick={handleShowWinnerTop} color="primary" className="topTeam-wins">
                {topTeamName}
                </Button> */}
                {/* <Button onClick={handleShowWinnerBottom} color="primary" className="bottomTeam-wins">
                {bottomTeamName}
                </Button> */}
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
