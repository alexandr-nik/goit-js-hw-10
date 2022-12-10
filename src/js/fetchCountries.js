import Notiflix from 'notiflix';
import { renderCountry } from './render';
import { clearCountyInfoList } from './render';

const URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  const url = `${URL}${name}`;
  fetch(url)
    .then(r => {
      if (!r.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        clearCountyInfoList();
      }
      return r;
    })
    .then(r => r.json())
    .then(array => {
      if (array.length > 10) {
        clearCountyInfoList();
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else {
        renderCountry(array);
      }
    });
}
