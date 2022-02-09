'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/portugal`);
request.send();

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  const { common } = data.name;
  const { png } = data.flags;
  const { por } = data.languages;
  const { cur } = data.currencies;

  const html = `
  <article class="country">
  <img class="country__img" src="${png}" />
  
    <div class="country__data">
    <h3 class="country__name">${common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${por}</p>
  <p class="country__row"><span>💰</span>${cur}</p>
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
