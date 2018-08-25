
var myInit = {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
}

//const myReq = new Request('https://localhost:3000/flutters', myInit)

let url = 'https://localhost:3000/flutters'


fetch(url, myInit)
    .then(response => {
        if (response.status === 200) {
            console.log(response);
        } else {
            throw new Error('Did not retrieve info...')
        }
    })
    .then(response => {
        console.debug(response);
    }).catch(error => {
        console.error(error);
    });