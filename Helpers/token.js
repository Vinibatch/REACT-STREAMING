import API_TOKEN from '../Helpers/token'

export function getFilmFromApiWithSearchedText(text) {
const url = ''
return fetch (url)
.then ((response) => response.json() )
.catch((error) => console.log(error) )
}
export function getImageFromApi (name) {
    return ' ' + name 
}