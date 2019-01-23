import 'whatwg-fetch';

// getUsers is the only public function, all others are private

export function getUsers() {
    return get ('users');
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) { 
    console.log(error); //eslint-disable-line no-console
}
