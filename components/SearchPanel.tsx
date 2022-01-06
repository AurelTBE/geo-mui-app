import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

interface Props {
    
}

const SearchPanel = (props: Props) => {
    return (
        <Grid container sx={{ height: 1 }}>
            <Grid item xs={6} >
                <Paper elevation={3}>
                    Coucou
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SearchPanel