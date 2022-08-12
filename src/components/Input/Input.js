import React, { useRef, useEffect } from 'react';
import './Input.css';

function Input({
  id,
  value,
  status,
  isDisabled,
  isFilled,
  autofocus,
  onChange,
  onKeyDown,
}) {
  const inputClass = 'input'.concat(
    isFilled ? ' -filled' : '',
    status ? ` -${status}` : '',
    isDisabled ? ` -disabled` : '',
  );
  const inputRef = useRef(null);

  useEffect(() => {
    if (autofocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  return (
    <input
      id={id}
      type="text"
      ref={inputRef}
      className={inputClass}
      disabled={isDisabled}
      maxLength="1"
      autoComplete="off"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Input;
