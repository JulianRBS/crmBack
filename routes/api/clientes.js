const express=require('express');
const router= express.Router();

const {Cliente}=require('../../database');

router.get('/',async (req,res)=>{
    const clientes=await Cliente.findAll();
    res.json(clientes)
})

router.post('/',async (req,res)=>{
    //const cliente=await Cliente.create(req.body);
    //res.json(cliente)

    for(let item of req.body.clientes){
        console.log(item)
        const cliente=await Cliente.create({
            nombres:item.nombres,
            apellidos:item.apellidos,
            telefono:item.telefono,
            direccion:item.direccion,
            campain:req.body.campain,
        });
    }
    res.json("Clientes Guardados")
})

module.exports=router;