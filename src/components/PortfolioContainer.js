import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from '../components/pages/Home';
import About from '../components/pages/Contact';
import Blog from '../components/pages/Portfolio';
import Contact from '../components/pages/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // checking to see what the value of `currentPage` is. Depending on the value of currentPage, return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
