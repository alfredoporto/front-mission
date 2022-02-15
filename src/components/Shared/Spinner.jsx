import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Spinner = () => {
    return (
        <div
            style={{
                marginLeft: '50%',
                paddingTop: '15%',
                marginBottom: '28%'
            }}>
            <CircularProgress disableShrink style={{ color: 'grey' }} />
        </div>
    )
}

export default Spinner;