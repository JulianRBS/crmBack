
const Sequelize=require('sequelize')

const sequelize=new Sequelize(
    'crmdb',
    'root',
    'root',
    {
        host:'localhost',
        port:'8889',
        socket:'/Applications/MAMP/tmp/mysql/mysql.sock',
        dialect:"mysql"
    }
)



//Check connect
/*
connection.connect(error => {
    if(error) throw error;
    console.log("DATABASE CONNECT");
});
*/

const ClienteModel=require('./models/clientes');
const Cliente=ClienteModel(sequelize,Sequelize)

sequelize.sync({force:false})
    .then(()=>{
    console.log("Tablas sincronizadas")
    })

module.exports={
    Cliente
}