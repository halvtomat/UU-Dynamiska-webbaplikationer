export function getData() {
    return fetch('https://stryk.herokuapp.com/tipset', {method : 'GET'});
}
export function processResponse(response) {
    return response.json();
}