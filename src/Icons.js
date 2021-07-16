import React from 'react';
import { FaTimes, FaRegCircle } from 'react-icons/fa';

const Icons = ({ choice }) => {
  switch (choice) {
    case 'cross':
      return <FaTimes className="icons" />;
    case 'circle':
      return <FaRegCircle className="icons" />;
    default:
      return '';
  }
};

export default Icons;
