import React from 'react';
import PropTypes from 'prop-types';
import './cardImage.css';

function CardImage({ image }) {
  return (
    <div className="img">
      <img src={image} alt="img" />
    </div>
  );
}

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
};
export default CardImage;
