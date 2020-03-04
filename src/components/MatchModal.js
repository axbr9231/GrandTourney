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
  const [sliceIndexes, setIndexes] = React.useState(1)


//   useEffect(() => {
//     const indexing = setInterval(() => {
        
//         setIndexes(index => index + 1)
        
//     }, 1000);
//     return () => {
//         if (sliceIndexes >= splitWinner.length - 1) {
//             clearInterval(indexing)
//         }
//     }
//   })
    let index = 1;
    // useEffect(() => {
    //     console.log(index)
    //     const startInterval = () => {
    //         setTimeout(() => {
    //             // setIndexes(index => index + 1)
    //             // index < splitWinner.length ? index++ : startInterval();
    //             console.log(index)
    //             index = index + 1;
    //             if (index < splitWinner.length - 1) {
    //                 startInterval()
    //             }
    //         }, 400);
    //     }
        
    //     return () => clearTimeout(startInterval);
    // }, []);

    // const startInterval = () => {
    //     setTimeout(() => {
    //         // setIndexes(index => index + 1)
    //         console.log(index)
    //         index++;
    //         if (index < splitWinner.length - 1 && showWinner) {
    //             startInterval()
    //         } else {
    //             clearTimeout(startInterval)
    //         }
    //     }, 400);
    // }
    

  const testWinner = 'Team Poo'
  const handleSplitWinner = (string) => {
    string += ' Progresses!'
    let stringArr = string.split('');
    console.log(stringArr)
    setSplitWinner(stringArr.slice());
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
      setTimeout(() => {setShowWinner(false)}, 200)
  };

  const handleShowWinner = () => {
    handleSplitWinner(testWinner);
    // handleSliceIndexes()
    setShowWinner(true)
    // startInterval();
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
                      {/* {splitWinner.slice(splitWinner[0], sliceIndexes).map((letter, i) => {
                          return ( */}
                            {/* <Slide direction="down" in={showWinner} mountOnEnter unmountOnExit timeout={1000}> */}
                                <div>
                                <DroppingLetter letters={splitWinner} showWinner={showWinner} index={index} />
                                </div>
                            {/* </Slide> */}
                          {/* )
                      })} */}
                      {/* <h2 className="modal-winner-teamName">Team Poo Progresses!</h2> */}
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
