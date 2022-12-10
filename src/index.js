import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { clearCountyInfoList } from './js/render';
import { refs } from './js/refs';

const DEBOUNCE_DELAY = 300;

refs.searchInput.addEventListener(
  'input',
  debounce(oninputCountries, DEBOUNCE_DELAY)
);

function oninputCountries(e) {
  const inputCountries = e.target.value.trim();
  if (inputCountries === '') {
    clearCountyInfoList();
    return;
  }
  fetchCountries(inputCountries);
}
