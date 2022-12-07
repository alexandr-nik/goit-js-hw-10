import './css/styles.css';
import debounce from 'lodash.debounce';
// import fetchCountries from "./fetchCountries.js";

const DEBOUNCE_DELAY = 5000;

refs = {
  searchInput: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.searchInput.addEventListener(
  'input',
  (e) => {
    let inputValue = e.currentTarget.value;
    console.log(inputValue);
    debounce(fetchCountries, DEBOUNCE_DELAY)
  }
);

function test(value) {
  console.log('Debounce - 1', value);
}

// refs.searchInput.addEventListener('input',
// e => {
//   let inputValue = e.currentTarget.value;
//   debounce(fetchCountries(inputValue), DEBOUNCE_DELAY)  ;
// }
// );

// refs.searchInput.addEventListener('input', debounce(function(e){
//   console.log(e.currentTarget);
//   fetchCountries(ecurrentTarget.value)
// },DEBOUNCE_DELAY));

function fetchCountries(name) {
  console.log(name);
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then(r => r.json())
    .then(renderCountry);
}
function renderCountry(r) {
  if (r.message == 'Not Found') {
    console.log(r.message);
  } else if (r.length == 1) {
    console.log(r);
    const render = `<ul>
        <li>Country: ${r[0].name.official}</li>
        <li>Capital: ${r[0].capital}</li>
        <li>Population: ${r[0].population}</li>
        <li class="flags">Flag: <img src="${r[0].flags.svg}" alt="${
      r[0].name.official
    }" width="30px"</li>
        <li>languages: ${Object.values(r[0].languages)}</li>
       </ul>`;
    refs.countryInfo.innerHTML = render;
  } else {
    const renderList = r.map(r => {
      console.log(r);
      return `<li class="flags"><img src="${r.flags.svg}" alt="${r.name.official}" width="50px"> ${r.name.official} </li>`;
    });
    console.log(renderList);
    refs.countryInfo.innerHTML = renderList.join('');

    console.log(r);
  }
}
