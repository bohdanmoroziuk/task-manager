import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ title, message, type }) => (
  <div className={`alert alert-${type}`} role="alert">
    <h4 className="alert-heading">{title}</h4>
    <hr />
    <p>{message}</p>
  </div>
);

Message.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

Message.defaultProps = {
  title: 'Message'
};

export default Message;
