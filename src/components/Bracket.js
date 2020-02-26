import React, {useState} from 'react';
import '../App.css';
import Match from './Match.js'
import Grid from '@material-ui/core/Grid';

const Bracket = ({ teamArray }) => {
    const originalRoundObject = {};
    
    const firstRoundMatches = [];
    let match = [];
    while (teamArray.length) {
        match.push(teamArray.splice(Math.floor(Math.random() * teamArray.length), 1)[0]);
        match.push(teamArray.splice(Math.floor(Math.random() * teamArray.length), 1)[0]);
        firstRoundMatches.push(match);
        match = [];
    }
    originalRoundObject[1] = firstRoundMatches;

    const numRounds = Math.ceil(Math.log2(teamArray.length));
    for (let i = 2; i <= numRounds; i++) {
        originalRoundObject[i] = []
    };

    const [rounds, updateRounds] = useState(originalRoundObject);

    console.log('rounds: ', rounds);

    return (
        <div id="bracket">
            <Grid container >
                <Grid item>
                {rounds[1].map((match, i) => {
                    console.log('hit at match number ', i);
                    return (
                        <Match round="round1" key={i} teams={match} />
                    )
                }) }
                </Grid>
                {/* <Grid item>
                {matches.slice(0, (matches.length / 2)).map((match, i) => {
                    return (
                        <Match round="round2" key={i} teams={[teamArray[0], teamArray[1]]} />
                    )
                }) }
                </Grid>
                <Grid item>
                {matches.slice(0, (matches.length / 4)).map((match, i) => {
                    return (
                        <Match round="round3" key={i} teams={[teamArray[0], teamArray[1]]} />
                    )
                }) }
                </Grid>
                <Grid item>
                {matches.slice(0, (matches.length / 8)).map((match, i) => {
                    return (
                        <Match round="round4" key={i} teams={[teamArray[0], teamArray[1]]} />
                    )
                }) }
                </Grid> */}
                
            </Grid>
        </div>
    )
}

export default Bracket;