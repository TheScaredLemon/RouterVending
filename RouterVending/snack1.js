import React from 'react';
import { Link } from 'react-router-dom';

const Snack1 = () => {
  return (
    <div>
      <h1>Snack 1</h1>
      <p>Details about Snack 1.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack1;
