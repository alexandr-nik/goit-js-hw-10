import { refs } from './refs';

export function clearCountyInfoList() {
  refs.countryInfo.innerHTML = '';
}

export function renderCountry(r) {
  if (r.length == 1) {
    const { flags, name, capital, population, languages } = r[0];
    const render = `<ul>
    <li class="flex"><img src="${flags.svg}" alt="${
      name.official
    }" width="30px"> ${name.official}</li>
           <li><span class="bold">Capital:</span> ${capital}</li>
          <li><span class="bold">Population:</span> ${population}</li>
          <li><span class="bold">Languages:</span> ${Object.values(
            languages
          )}</li>
         </ul>`;
    refs.countryInfo.innerHTML = render;
  } else {
    const renderList = r.map(r => {
      return `<li class="flags"><img src="${r.flags.svg}" alt="${r.name.official}" width="50px"> ${r.name.official} </li>`;
    });
    refs.countryInfo.innerHTML = renderList.join('');
  }
}
