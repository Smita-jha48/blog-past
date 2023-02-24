import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function PageNotFound() {
  return (
    <div>
      <Header />
      <div>
        <p>404 Error. Page Not Found</p>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;
