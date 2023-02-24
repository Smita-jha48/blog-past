import React from 'react';
import PropTypes from 'prop-types';
import './dateTime.css';

function DateTime({ date, readingTime }) {
  return (
    <div className="upper">
      <p>{date}</p>
      <p>{readingTime}</p>
    </div>
  );
}
DateTime.propTypes = {
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
};

export default DateTime;
