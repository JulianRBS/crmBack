const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const apiRouter=require('./routes/api')
require('./database')


app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

//RUTAS
app.use('/api',apiRouter);


app.listen(PORT,()=>console.log('Server Running'));