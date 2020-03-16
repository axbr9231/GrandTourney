import React from 'react';
import { Grid } from '@material-ui/core';
import '../App.css';
import Match from './Match.js'

const Round = ({ round, matches, currentMatch, updateNextRound }) => {

    console.log(`matches from round ${round}: ${matches}`);

    return (
        <div>
            <Grid container >
                <Grid item>
                {matches.map((match, i) => {
                    return (
                        <Match round={round} key={i} index={i} match={match} currentMatch={currentMatch} updateNextRound={updateNextRound} />
                    )
                }) }
                </Grid>
            </Grid>
        </div>
    )
}

export default Round;