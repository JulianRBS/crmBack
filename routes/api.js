const express=require('express');
const router= express.Router();



const apiClientesRouter=require('./api/clientes');

router.use('/clientes',apiClientesRouter);

module.exports=router;