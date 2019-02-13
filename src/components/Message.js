import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Message = ({ title, message, type }) => (
    <div className={`alert alert-${type}`} role="alert">
        <h4 className="alert-heading">{title || "Message"}</h4>
        <hr />
        <p>{message}</p>
        <Link className="btn btn-dark" to="/">Home</Link>
    </div>
);

Message.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Message;