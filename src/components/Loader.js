import React from 'react';

const loaderStyle = {
    width: '3em',
    height: '3em'
};

const Loader = () => (
    <div className="d-flex justify-content-center">
        <div className="spinner-border text-dark" style={{loaderStyle}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default Loader;