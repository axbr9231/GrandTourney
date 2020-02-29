import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import '../App.css';
import Match from './Match.js'

const Round = ({ round, matches }) => {

    return (
        <div>
            <Grid container >
                <Grid item>
                {matches.map((match, i) => {
                    console.log(`round: ${round} match: ${i}: ${match}`);
                    return (
                        <Match round={round} key={i} teams={match} />
                        // ((match[0] || match[1]) ? <Match round={round} key={i} teams={match} /> : null)
                    )
                }) }
                </Grid>
            </Grid>
        </div>
    )
}

export default Round;