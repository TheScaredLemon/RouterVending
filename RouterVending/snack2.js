import React from 'react';
import { Link } from 'react-router-dom';

const Snack2 = () => {
  return (
    <div>
      <h1>Snack 2</h1>
      <p>Details about Snack 2.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack2;
