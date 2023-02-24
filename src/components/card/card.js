import React, { useState } from 'react';

import { PropTypes } from 'prop-types';
import DateTime from '../dateTime/dateTime';
import CardImage from '../cardImage/cardImage';
import CardContent from '../cardContent/cardContent';
import CardFooter from '../cardFooter/cardFooter';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';
import './card.css';

function Card({
  id,
  claps,
  liked,
  image,
  date,
  title,
  readingTime,
  description,
}) {
  const [clap, setClap] = useState(claps);
  const [like, setLike] = useState(liked);

  const handleLike = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(id), {
        data: {
          liked: !like,
        },
      });
      setLike(!like);
    } catch (e) {}
  };

  const handleClap = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(id), {
        data: {
          claps: clap + 1,
        },
      });
      setClap(clap + 1);
    } catch (e) {}
  };

  return (
    <div data-testid="post" className="post">
      <CardImage image={image} />
      <DateTime date={date} readingTime={readingTime} />
      <CardContent title={title} description={description} />
      <hr className="horizontalLine" />
      <CardFooter
        clap={clap}
        handleClap={handleClap}
        like={like}
        handleLike={handleLike}
      />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  claps: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Card;
