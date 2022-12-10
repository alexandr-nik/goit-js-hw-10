import getRefs from './refs'

const refs = getRefs();

export function clearCountyInfoList() {
  refs.countryInfo.innerHTML = '';
}

export function renderCountry(r) {
  if (r.message == 'Not Found') {
    return;
  } else if (r.length == 1) {
    const render = `<ul>
    <li class="flex"><img src="${r[0].flags.svg}" alt="${
      r[0].name.official
    }" width="30px"> ${r[0].name.official}</li>
           <li><span class="bold">Capital:</span> ${r[0].capital}</li>
          <li><span class="bold">Population:</span> ${r[0].population}</li>
          <li><span class="bold">Languages:</span> ${Object.values(
            r[0].languages
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
