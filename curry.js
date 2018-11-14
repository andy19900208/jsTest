var http = require('http');

function fetchData(path, handler) {
    http.get(path, (error, response, body) => {
        //console.log(`Got response: ${res.statusCode}`);
        console.log(body);
    //res.resume();
    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
    // var xmlHttp = new XMLHttpRequest();
    // var result = {};

    // xmlHttp.open( "GET", path, false );
    // xmlHttp.send( null );
    // result = JSON.parse(xmlHttp.responseText);
    // handler(result.data);
}

function showResult(result) {
    console.log('The result is: ' + result);
}

var path = 'http://www.json-generator.com/api/json/get/bPQMSaHjsi?indent=2';
fetchData(path, showResult);




