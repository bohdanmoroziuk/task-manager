import React from 'react';

import Message from '../components/shared/Message';

const NotFound = () => (
    <Message
        type="warning"
        title="Error 404!"
        message="Page not found..."
    />
);

export default NotFound;