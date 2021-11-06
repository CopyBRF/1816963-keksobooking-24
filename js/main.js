import {generateRecord} from './data.js';
import {translate} from './translate.js';
import {setActiveState} from './form-status.js';

setActiveState();

// eslint-disable-next-line no-unused-vars
function getData(numberOfRows = 10) {
  const result = [];

  for (let iter = 0; iter < numberOfRows; iter++) {
    result.push(generateRecord());

  }

  return result;
}

function  formatAd(tpl, ads) {
  const addressElement = tpl.querySelector('.popup__text--address');
  if (ads.offer.address.length === 0){
    addressElement.classList.add('hidden');
  } else{
    addressElement.textContent = ads.offer.address;
  }
  const titleElement = tpl.querySelector('.popup__title');
  if (ads.offer.title.length === 0){
    titleElement.classList.add('hidden');
  } else {
    titleElement.textContent = ads.offer.title;
  }
  const priceElement = tpl.querySelector('.popup__text--price');
  if (ads.offer.price.length === 0){
    priceElement.classList.add('hidden');
  } else {
    priceElement.textContent = `${ads.offer.price} ₽/ночь`;
  }
  const typeElement = tpl.querySelector('.popup__type');
  if(ads.offer.type.length === 0){
    typeElement.classList.add('hidden');
  } else {
    typeElement.textContent = translate(ads.offer.type);
  }
  const capacityElement = tpl.querySelector('.popup__text--capacity');
  if (ads.offer.rooms.length === 0 || ads.offer.guests.length === 0) {
    capacityElement.classList.add('hidden');
  } else {
    capacityElement.textContent = `${ads.offer.rooms} комнаты для ${ads.offer.guests} гостей`;
  }
  const timeElement = tpl.querySelector('.popup__text--time');
  if (ads.offer.checkin.length === 0 || ads.offer.checkout.length === 0){
    timeElement.classList.add('hidden');
  } else {
    timeElement.textContent = `Заезд после ${ads.offer.checkin}, выезд до ${ads.offer.checkout}`;
  }

  const deskscriptionElement = tpl.querySelector('.popup__description');
  if (ads.offer.description.length === 0){
    deskscriptionElement.classList.add('hidden');
  } else {
    deskscriptionElement.textContent = ads.offer.description;
  }

}
const formatFeatures = function (tpl, features){
  const popupFeatures = tpl.querySelector('.popup__features');
  const featuresElement = features.map((element) =>
    `<li class='popup__feature popup__feature--${element}'>${element}</li>`,
  ).join('');
  popupFeatures.innerHTML = featuresElement;
};

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
  formatFeatures(tpl, ads.offer.features);
  mapDiv.appendChild(tpl);
}, false);
