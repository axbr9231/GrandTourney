import React, {useState} from 'react';
import '../App.css';
import Match from './Match.js'
import Grid from '@material-ui/core/Grid';

const Bracket = ({ teamArray }) => {
    let numMatches = new Array(Math.floor(teamArray.length / 2)).fill(1);

    return (
        <div id="bracket">
            <Grid container >
                <Grid item>
                {numMatches.map((match, i) => {
                    console.log('hit at match number ', i);
                    return (
                        <Match round="round1" key={i} teams={[teamArray[0], teamArray[1]]} />
                    )
                }) }
                </Grid>
                <Grid item>
                {numMatches.slice(0, (numMatches.length / 2)).map((match, i) => {
                    return (
                        <Match round="round2" key={i} teams={[teamArray[0], teamArray[1]]} />
                    )
                }) }
                </Grid>
                <Grid item>
                {numMatches.slice(0, (numMatches.length / 4)).map((match, i) => {
                    return (
                        <Match round="round3" key={i} teams={[teamArray[0], teamArray[1]]} />
                    )
                }) }
                </Grid>
                <Grid item>
                {numMatches.slice(0, (numMatches.length / 8)).map((match, i) => {
                    return (
                        <Match round="round4" key={i} teams={[teamArray[0], teamArray[1]]} />
                    )
                }) }
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Bracket;