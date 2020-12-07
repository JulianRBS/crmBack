const express=require('express');
const router= express.Router();

const apiClientesRouter=require('./api/clientes');
const apiCampainRouter=require('./api/campains');

router.use('/clientes',apiClientesRouter);
router.use('/campains',apiCampainRouter);

module.exports=router;