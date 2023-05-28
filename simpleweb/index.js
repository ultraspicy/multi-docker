const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Bye there');
});

app.listen(999, ()=> {
    console.log('listening on port 999');
}); 