const express = require('express');
const app = express();
app.use(express.static(__dirname));


app.listen(8888, () => {
    console.log('listening on:8888');
  });


