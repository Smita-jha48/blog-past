import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Card from '../../components/card/card';
import makeRequest from '../../utils/makeRequest';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';
import './blog.css';

function Blog() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    message: '',
  });
  useEffect(() => {
    // setLoading(true);
    makeRequest(GET_BLOG_DATA, {}, navigate)
      .then((response) => {
        setData(response);
        // setLoading(false);
      })
      .catch((e) => {
        setError({ isError: true, message: e.message });
        // setLoading(false);
      });
  }, []);
  if (error.isError) {
    return (
      <div className="blogDataError">
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      {!data ? (
        <div data-testid="loader">loading...</div>
      ) : (
        <div>
          <Header />
          <div data-testid="posts" className="posts">
            {data.map((post) => {
              return (
                <Card
                  key={post.id}
                  id={post.id}
                  date={post.date}
                  readingTime={post.reading_time}
                  title={post.title}
                  description={post.description}
                  claps={post.claps}
                  claped={post.claped}
                  liked={post.liked}
                  image={post.image}

                  // key={post.id}
                  // blogData={post}
                />
              );
            })}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Blog;
