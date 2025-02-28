// components/GridCell.js
import React from 'react';

const GridCell = ({ children }) => {
  return <td className="p-2 border relative">{children}</td>;
};

export default GridCell;