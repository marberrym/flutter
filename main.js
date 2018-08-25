
var myInit = {
    method: 'GET',
    mode: 'no-cors',
    cache: 'default',
    headers: {
        'Access-Control-Allow-Origin':'*'
    },
    body: null,
};

//const myReq = new Request('https://localhost:3000/flutters', myInit)
//let requesturl = 'http://localhost:3000/flutters'


fetch('http://localhost:3000/flutters', myInit)
    .then(response => {
        if (response.status === 200) {
            console.log(response);
        } else {
            console.log('still failing...');
            throw new Error('Did not retrieve info...') 
        }
    })
    .then(response => {
        console.debug(response);
    }).catch(error => {
        console.error(error);
    });