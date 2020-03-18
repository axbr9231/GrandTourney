import React from 'react';
import Slide from '@material-ui/core/Slide';
import { useState, useEffect } from 'react';

const DroppingLetter = React.forwardRef((props, ref) => {

    const [sliceIndexes, setIndexes] = React.useState(1)
    console.log('letters length: ', props.letters.length)
    
    useEffect(() => {
        const indexing = setInterval(() => {
            if (sliceIndexes < props.letters.length) {
                setIndexes(index => index + 1)
            } else {
                clearInterval(indexing);
            }
        }, 250);
            return () => clearInterval(indexing)}, [sliceIndexes])

            
        console.log('index: ', sliceIndexes)

   
    return (
        <div className="winner-text">
            {props.letters.slice(0, sliceIndexes).map((letter, i) => {
                console.log('letter: ', letter)
                if (letter === ' ') {
                    return (
                        <div className="spacing">

                        </div>
                    )
                }
                return (
                    <Slide direction="down" in={props.showWinner} mountOnEnter unmountOnExit timeout={200} key={i}>
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
