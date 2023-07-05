const express = require('express');

const app = express();

const port = 8000;

app.get('/', function (req, res) {
    res.send('GET request to homepage')
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 

app.get('/products', function (req, res) {
    console.log('received')
    var products = {
        1: {
            name: "Product 1",
            description: "This is an awesome product"
        },
        2: {
            name: "Product 2",
            description: "This is also an awesome product"
        }
   };
   res.writeHead(200, {"Content-Type": "application/json"});
   res.end(JSON.stringify(products));
});