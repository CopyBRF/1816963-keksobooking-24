import {getRandomInt, getRandomFloat} from './util.js';
import {getAuthor, getType, getTime, getFeatures, getPhotos} from './data.js';

function generateRecord() {
  return {
    author: getAuthor(),
    offer: {
      title: 'Заголовок предложения',
      address: '{{location.lat}}, {{location.lng}}',
      price: getRandomInt(1000, 10000),
      type: getType(),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 10),
      checkin: getTime(),
      checkout: getTime(),
      features: getFeatures(),
      description: 'Описание помещений',
      photos: getPhotos(),
    },
    location: {
      lat: getRandomFloat(35.65000, 35.70000, 5),
      lng: getRandomFloat(139.70000, 139.80000, 5),
    },
  };
}

// eslint-disable-next-line no-unused-vars
function getData(numberOfRows = 10) {
  const result = [];

  for (let iter = 0; iter < numberOfRows; iter++) {
    result.push(generateRecord());

  }

  return result;
}
