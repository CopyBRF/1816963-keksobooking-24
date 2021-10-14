import {getRandomInt} from './util.js';

let authorCounter = 0;
function getAuthor() {
  const numberExpression = authorCounter < 10
    ? `0${String(authorCounter)}`
    : authorCounter;

  authorCounter++;
  return {
    avatar: `img/avatars/user${numberExpression}.png`,
  };

}

export{getAuthor};

function getType() {
  const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  return types[Math.floor(Math.random() * types.length)];
}

export{getType};

function getTime() {
  const time = ['12:00', '13:00', '14:00'];
  return time[Math.floor(Math.random() * time.length)];
}

export{getTime};

function getFeatures() {
  const feature = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const random = getRandomInt(1, feature.length);
  return feature.slice(0, random);
}

export{getFeatures};

function getPhotos() {
  const photo = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];
  const random = getRandomInt(1, photo.length);
  return photo.slice(0,random);
}

export{getPhotos};