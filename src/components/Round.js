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
                    console.log('hit at match number ', i);
                    return (
                        <Match round={round} key={i} teams={match} />
                    )
                }) }
                </Grid>
            </Grid>
        </div>
    )
}

export default Round;