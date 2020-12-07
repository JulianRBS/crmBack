module.exports = (sequelize,type)=>{
    return sequelize.define('cliente',{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombres:type.STRING,
        apellidos:type.STRING,
        direccion:type.STRING,
        telefono:type.STRING,
        campain:type.STRING,

    })
}