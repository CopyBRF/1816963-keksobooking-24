import {getRandomInt, getRandomFloat} from './util.js';
import {getAuthor, getType, getTime, getFeatures, getPhotos} from './data.js';
import  {translate} from './translate.js';

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

function  formatAd(tpl, ads) {
  tpl.querySelector('.popup__text--address').textContent = ads.offer.address;
  tpl.querySelector('.popup__title').textContent = ads.offer.title;
  tpl.querySelector('.popup__text--price').textContent = `${ads.offer.price} ₽/ночь`;
  tpl.querySelector('.popup__type').textContent = translate(ads.offer.type);
  tpl.querySelector('.popup__text--capacity').textContent = `${ads.offer.rooms} комнаты для ${ads.offer.guests} гостей`;
  tpl.querySelector('.popup__text--time').textContent = `Заезд после ${ads.offer.checkin}, выезд до ${ads.offer.checkout}`;
  tpl.querySelector('.popup__features').textContent = ads.offer.features;
  const deskscriptionElement = tpl.querySelector('.popup__description')
  if (ads.offer.description.length){
    deskscriptionElement.textContent = ads.offer.description;
  } else {
    deskscriptionElement.classList.add('hidden');
  }


  tpl.querySelector('.popup__features').textContent = ads.offer.features;
}

function formatPhotos(tpl, photos){
  const popupPhotos = tpl.querySelector('.popup__photos');
  const img = popupPhotos.querySelector('img');
  for (let i = 0; i < photos.length; i++){
    const imgClone = img.cloneNode(true);
    imgClone.setAttribute('src', photos[i]);
    popupPhotos.appendChild(imgClone);
  }
  img.remove();
}

function formatAvatar(tpl, avatar){
  const img = tpl.querySelector('.popup__avatar');
  img.setAttribute('src', avatar);
}

document.addEventListener('DOMContentLoaded', () => {
  const ads = generateRecord();
  const tpl = document.querySelector('#card').content;
  const mapDiv = document.querySelector('#map-canvas');
  formatAd(tpl, ads);
  formatPhotos(tpl, ads.offer.photos);
  formatAvatar(tpl, ads.author.avatar);
  mapDiv.appendChild(tpl);
}, false);

