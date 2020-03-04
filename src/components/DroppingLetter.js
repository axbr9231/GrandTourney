import React from 'react';
import Slide from '@material-ui/core/Slide';
import { useState, useEffect } from 'react';

const DroppingLetter = React.forwardRef((props, ref) => {

    const [sliceIndexes, setIndexes] = React.useState(1)
    console.log('letters length: ', props.letters.length)
    // useEffect(() => {
    //     const indexing = setInterval(() => {
    //         if (sliceIndexes < props.letters.length - 1) {
    //             setIndexes(index => index + 1)
    //         }
    //     }, 1);
    //         return () => clearInterval(indexing)}, [])

            
    //     }


    return (
        <div className="winner-text">
            {props.letters.slice(props.letters[0], props.index).map((letter, i) => {
                console.log('letter: ', letter)
                if (letter === ' ') {
                    return (
                        <div className="spacing">

                        </div>
                    )
                }
                return (
                    <Slide direction="down" in={props.showWinner} mountOnEnter unmountOnExit timeout={2000} key={i}>
                        <div>
                            <h2 className="modal-winner-teamName">{letter}</h2>
                        </div>
                    </Slide>
                )
            })}
        </div>
    )
})

export default DroppingLetter;
