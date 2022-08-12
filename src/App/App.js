import React, { useEffect, useState } from 'react';
import { WordsBox, Button, Keyboard } from '../components';
import buildGroup from '../assets/baseData';
import './App.css';

const word = ['P', 'A', 'P', 'E', 'L'];

function App() {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const wordsGroup = buildGroup();
    setWordsGroup(wordsGroup);
  }, []);

  const [currentRow, setCurrentRow] = useState(0);
  const [wordsGroup, setWordsGroup] = useState([]);

  function getGroupId(wordArr) {
    return wordArr[0].id.split('-')[0];
  }

  function updateWordsGroup(groupId, newValues) {
    const newWordGroup = wordsGroup.map((item) =>
      item.id === groupId ? { ...item, letters: newValues } : item,
    );
    setWordsGroup(newWordGroup);
  }

  function updateFilledGroup(row, validatedCurrentRow) {
    const newWordGroup = wordsGroup.map((item, index) =>
      index === row
        ? { ...item, ...validatedCurrentRow, isFilled: true, autofocus: false }
        : index === row + 1
        ? { ...item, autofocus: true }
        : item,
    );
    setWordsGroup(newWordGroup);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleConfirmation();
    }
  }

  function handleChangeWord(wordArr) {
    const groupId = getGroupId(wordArr);
    updateWordsGroup(groupId, wordArr);
  }

  function handleConfirmation() {
    // TODO: ajuste lógica que valida as letras no caso que só tiver uma ocorrencia
    const currentRowWords = wordsGroup[currentRow];
    const validatedCurrentRow = validateWordStatus(currentRowWords);
    const isWordFilled = checkLettersIsFilled(validatedCurrentRow.letters);
    if (isWordFilled) {
      updateFilledGroup(currentRow, validatedCurrentRow);
      setCurrentRow((prevState) => (prevState += 1));
    }
  }

  function validateWordStatus(currentWord) {
    const updatedLetters = currentWord.letters.map((letter, index) =>
      word[index] === letter.value
        ? { ...letter, status: 'correct' }
        : word.includes(letter.value)
        ? { ...letter, status: 'includes' }
        : letter,
    );

    return { ...currentWord, letters: updatedLetters };
  }

  function checkLettersIsFilled(letters) {
    return letters.every((letter) => letter.value);
  }

  return (
    <main>
      <div className="wordsgroupd-box">
        {wordsGroup.map((group, index) => (
          <WordsBox
            key={group.id}
            letters={group.letters}
            isFilled={group.isFilled}
            isDisabled={currentRow !== index}
            autofocus={group.autofocus}
            onChangeInput={handleChangeWord}
          />
        ))}
      </div>
      <Keyboard />
      <Button text="Confirmar" onClick={handleConfirmation} />
    </main>
  );
}

export default App;
