import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="error-page">
      <h2>Sorry, this page isn't available</h2>
      <p>
        The link you followed may be broken, or the page may have been removed.
        <Link className="homepage-message" to={'/'}>&nbsp;Go back to InstaGalaxy.</Link>
      </p>
    </div>
  );
};
