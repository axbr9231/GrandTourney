import React, {useState} from 'react';
import '../App.css';
import MatchReal from './Match.js'
import Grid from '@material-ui/core/Grid';

const Bracket = (props) => {
    let teams = props.numTeams;
    let numMatches = new Array(Math.floor(teams / 2)).fill(1);
    console.log(numMatches);
    // const [numMatches, setMatches] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    return (
        <div id="bracket">
            <Grid container >
                <Grid item>
                {numMatches.map((match, i) => {
                    console.log('hit at match number ', i);
                    return (
                        <MatchReal round="round1" key={i}/>
                    )
                }) }
                </Grid>
                <Grid item>
                {numMatches.slice(0, (numMatches.length / 2)).map((match, i) => {
                    return (
                        <MatchReal round="round2" key={i}/>
                    )
                }) }
                </Grid>
                <Grid item>
                {numMatches.slice(0, (numMatches.length / 4)).map((match, i) => {
                    return (
                        <MatchReal round="round3" key={i}/>
                    )
                }) }
                </Grid>
                <Grid item>
                {numMatches.slice(0, (numMatches.length / 8)).map((match, i) => {
                    return (
                        <MatchReal round="round4" key={i}/>
                    )
                }) }
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Bracket;