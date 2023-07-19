const express = require('express');
const parser= require('body-parser');

const { PORT } = require('./config/serverConfig');
const CityRepository= require('./repositories/city-repository');



const setupAndStartServer = async ()=>{

    const app = express();
    app.use(parser.json());
    app.use(parser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Successfully started the server on PORT : ${PORT}`);
        const repo= new CityRepository();
        repo.createCity({name: "New Delhi"});
    });
    


}


setupAndStartServer();



