import React from 'react';
import KeyboardLine from './KeyboardLine/KeyboardLine';
import { keyboardLetters } from './letters';
import './Keyboard.css';

function Keyboard() {
  return keyboardLetters.map((lettersArr, index) => (
    <KeyboardLine key={index} index={index} letters={lettersArr} />
  ));
}

export default Keyboard;
