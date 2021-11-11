import { CircularProgress } from '@mui/material';
import React, { Children } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    Children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;