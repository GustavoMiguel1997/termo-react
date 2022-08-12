import React from 'react';
import { Input } from '../';
import './InputsBox.css';

function InputsBox({
  inputsConfig,
  isDisabled,
  isFilled,
  autofocus,
  onChangeInput,
  onKeyDown,
}) {
  return (
    <div className="inputsbox">
      {inputsConfig.map(({ id, value, status }, index) => (
        <Input
          id={id}
          key={id}
          value={value}
          status={status}
          autofocus={autofocus && index === 0}
          isDisabled={isDisabled}
          isFilled={isFilled}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
        />
      ))}
    </div>
  );
}

InputsBox.defaultProps = { inputsConfig: [] };

export default InputsBox;
