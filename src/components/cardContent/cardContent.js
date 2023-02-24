import React from 'react';
import './cardContent.css';
import PropTypes from 'prop-types';

function CardContent({ title, description }) {
  return (
    <div className="middle">
      <p className="title">{title}</p>
      <p className="about">{description}</p>
    </div>
  );
}

CardContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardContent;
