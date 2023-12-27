import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
 
export const Info = () => {
  const [formTarget, setFormTarget] = useState(null);
  const [error, setError] = useState(null);
 
  return (
    <div>
      <h2>Learn Meteor!</h2>
    </div>
  );
};
 