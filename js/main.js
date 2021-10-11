function getRandomInt(min, max) {
  if (min >= max) {
    throw new Error('min cannot be greater than or equal to max');
  }

  if (min < 0 || max < 0) {
    throw new Error('min and max cannot be less then 0');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt();


function getRandomFloat(min, max, dec) {
  if (min >= max) {
    throw new Error('min cannot be greater than or equal to max');
  }

  if (min < 0 || max < 0) {
    throw new Error('min and max cannot be less then 0');
  }
  const multiplier = Math.pow(10, dec);

  return ((Math.random() * (max - min) * multiplier + multiplier * min) / multiplier).toFixed(dec);
}

getRandomFloat();

function getData(numberOfRows = 10) {
  result = []

  for (i = 0; i < numberOfRows; i++) {
    result.push(generateRecord())

  }

  return result
}

let c = 0;
function getAuthor() {
  let numberExpression = c < 10
    ? '0' + c
    : c;

  c++;
  return {
    avatar: 'img/avatars/user' + numberExpression + '.png'
  }

}

function getType() {
  const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  return types[Math.floor(Math.random() * types.length)];
}

function getTime() {
  const time = ['12:00', '13:00', '14:00'];
  return time[Math.floor(Math.random() * time.length)];
}

function getFeatures() {
  const feature = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const random = getRandomInt(1, feature.length);
  return feature.slice(0, random);
};

function getPhotos() {
  const photo = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
    const random = getRandomInt(1, photo.length);
    return photo.slice(0,random);
}

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
    }
  }
}
