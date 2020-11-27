const http = require('http');

http.get('http://localhost:51161/api/productos', res => {
    let data = '';

    res.on('data', d => {
        data += d;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });
});