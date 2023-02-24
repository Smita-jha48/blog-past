import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import liked from '../../assets/Icons/heart-red.svg';
import disliked from '../../assets/Icons/heart-black.svg';
import clapImg from '../../assets/Icons/clapping-grey.svg';
import './cardFooter.css';

function CardFooter({ like, clap, handleLike, handleClap }) {
  return (
    <div className="bottom">
      <div className="clap">
        <img
          className="reaction"
          onClick={handleClap}
          src={clapImg}
          alt="clapping"
        />
        <p>{clap}</p>
      </div>
      <img
        className="reaction"
        onClick={handleLike}
        src={like ? liked : disliked}
        alt="like"
      />
    </div>
  );
}

CardFooter.propTypes = {
  like: PropTypes.bool.isRequired,
  clap: PropTypes.number.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleClap: PropTypes.func.isRequired,
};
export default CardFooter;
