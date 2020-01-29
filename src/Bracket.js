import React, {useState} from 'react';
import './App.css';
import MatchReal from './MatchReal.js'
import Grid from '@material-ui/core/Grid';

const Bracket = (props) => {
   
    const [numMatches, setMatches] = useState([1, 2]);

    return (
        <div id="bracket">
            <Grid container >
                <Grid item>
                {numMatches.map((match, i) => {
                    return (
                        <MatchReal round="round1" key={i}/>
                    )
                }) }
                </Grid>
                <Grid item>
                    <MatchReal round="round2"/>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Bracket;