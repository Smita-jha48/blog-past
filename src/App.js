import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/blog/blog';
import Error from './pages/error/error';
import PageNotFound from './pages/pageNotFound/pageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/error/:errorCode" element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
