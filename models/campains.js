module.exports = (sequelize,type)=>{
    return sequelize.define('campain',{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:type.STRING,
        codigo:type.STRING,
        fecha:type.DATE,

    })
}