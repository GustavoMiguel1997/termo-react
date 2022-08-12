import React from 'react';
import './KeyboardLine.css';

function KeyboardLine({ letters, index }) {
  const lineClass = 'keyboard-line'.concat(
    index === 1 ? ' -smallSpace' : index === 2 ? ' -largeSpace' : '',
  );

  return (
    <div className={lineClass}>
      {letters.map((letter) => (
        <button key={letter} className="keyboard-line__button">
          {letter}
        </button>
      ))}
    </div>
  );
}

export default KeyboardLine;
