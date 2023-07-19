const express = require('express');
const parser= require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes= require('./routes/index');



const setupAndStartServer = async ()=>{

    const app = express();
    app.use(parser.json());
    app.use(parser.urlencoded({ extended: true }));

    app.use('/api',ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Successfully started the server on PORT : ${PORT}`);
        
    });
    


}


setupAndStartServer();



