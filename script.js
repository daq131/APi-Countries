'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/portugal`);
request.send();

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  const [common] = Object.entries(data.name);
  const [png, svg] = Object.entries(data.flags);
  const [por] = Object.entries(data.languages);
  const [cur] = Object.entries(data.currencies);

  const html = `
  <article class="country">
  <h3 class="country__name">${common}</h3>
    <div class="country__data">
    <img class="country__img" src="${png}" />
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${por}</p>
//    <p class="country__row"><span>💰</span>${cur}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
// <h3 class="country__name">${data.name}</h3>
//  <img class="country__img" src="${data.flag}" />
//<p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
