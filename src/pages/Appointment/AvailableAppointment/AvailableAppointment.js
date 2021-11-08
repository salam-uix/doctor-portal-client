import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00AM - 9:00AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05AM - 11:30AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00AM - 6:30AM',
        space: 9
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00AM - 8:30AM',
        space: 7
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '8:00AM - 9:00AM',
        space: 6
    },
    {
        id: 6,
        name: 'Teeth Orthodontics',
        time: '8:00AM - 9:00AM',
        space: 10
    }
]

const AvailableAppointment = ({ date }) => {
    return (
        <Container>
            <Typography
                sx={{ color: 'info.main' }} variant="h5" gutterBottom component="div">
                This is available appointment {date.toDateString()}
            </Typography>

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;