import React from 'react';
import './Square.css';

export interface SquareProps {
    value: string;
    updateValue: () => void 
}

const Square = ({value, updateValue}: SquareProps) => {
    return (
      <button className="square" onClick={updateValue}>{value}</button>
    )
}

export default Square;