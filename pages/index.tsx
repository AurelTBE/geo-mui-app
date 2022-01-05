import type { NextPage } from 'next'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Home: NextPage = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper elevation={3}>
          Coucou
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Home
