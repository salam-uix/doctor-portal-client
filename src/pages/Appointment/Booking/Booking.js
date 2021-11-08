import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={3} sx={{ py: 5 }} >
                <Typography sx={{ color: 'info.main' }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button variant="contained">Book Appointment</Button>
            </Paper>

        </Grid>
    );
};

export default Booking;