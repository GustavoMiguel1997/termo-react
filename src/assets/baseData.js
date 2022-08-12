function buildLetters(group) {
  return [
    { id: `${group}-letter1`, value: '' },
    { id: `${group}-letter2`, value: '' },
    { id: `${group}-letter3`, value: '' },
    { id: `${group}-letter4`, value: '' },
    { id: `${group}-letter5`, value: '' },
  ];
}

function buildGroup() {
  return [
    { id: 'group1', isFilled: false, autofocus: true, letters: buildLetters('group1') },
    { id: 'group2', isFilled: false, letters: buildLetters('group2') },
    { id: 'group3', isFilled: false, letters: buildLetters('group3') },
    { id: 'group4', isFilled: false, letters: buildLetters('group4') },
    { id: 'group5', isFilled: false, letters: buildLetters('group5') },
  ];
}

export default buildGroup;
