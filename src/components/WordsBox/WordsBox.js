import React from 'react';
import { InputsBox } from '../';
import './WordsBox.css';

function WordsBox({
  letters,
  isFilled,
  isDisabled,
  autofocus,
  onChangeInput,
  onCompleteWord,
}) {
  function handleChangeInputValue(elementId, newValue) {
    const newInputsConfig = letters.map((item) =>
      item.id === elementId ? { ...item, value: newValue } : item,
    );
    onChangeInput(newInputsConfig);
    return newInputsConfig;
  }

  function handleChangeInput(e) {
    const elementId = e.target.id;
    const newValue = e.target.value?.toUpperCase() || '';
    handleChangeInputValue(elementId, newValue);

    if (newValue) {
      moveFocusToNextInput(e.target);
    }

    if (newValue.length === 5) {
      onCompleteWord(newValue);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Backspace' && !e.target.value) {
      const elementId = e.target.id;

      handleChangeInputValue(elementId, '');
      moveToPreviousElement(e.target);
    }
  }

  function moveToPreviousElement(currentInput) {
    currentInput.previousElementSibling?.focus();
  }

  function moveFocusToNextInput(currentInput) {
    currentInput.nextElementSibling?.focus();
  }

  const wordsBoxClass = 'wordsbox'.concat(isDisabled ? ' -disable' : '');

  return (
    <div className={wordsBoxClass}>
      <InputsBox
        inputsConfig={letters}
        isFilled={isFilled}
        isDisabled={isDisabled}
        autofocus={autofocus}
        onChangeInput={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default WordsBox;
