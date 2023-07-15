const express = require('express');

const { PORT } = require('./config/serverConfig');

const app = express();


app.use('/',(req,res)=>{
    res.send('Welcome to Air India');
})


app.listen(PORT, () => {
    console.log(`Successfully started the server on PORT : ${PORT}`);
});

