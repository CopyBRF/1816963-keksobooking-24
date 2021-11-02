const vocabulary ={
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'
};

function translate(word) {
  return vocabulary[word] ? vocabulary[word] : word

}

export{translate};
