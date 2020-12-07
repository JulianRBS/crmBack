const express=require('express');
const router= express.Router();

const {Campain}=require('../../database');

router.get('/',async (req,res)=>{
    const campains=await Campain.findAll();
    res.json(campains)
})

router.post('/',async (req,res)=>{

        const campain=await Campain.create({
            fecha:req.body.fecha,
            nombre:req.body.nombre,
            codigo:req.body.codigo,
        });

    res.json("Campaña Guardada")
})

module.exports=router;