
export function fetchCountries(name){
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(`url}`).then(r => r.json()).then(console.log)
    
}