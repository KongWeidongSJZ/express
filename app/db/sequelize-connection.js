const Sequelize = require('sequelize'),
    sequelize = new Sequelize('mysql', 'root', 'root', {
        host: '127.0.0.1',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });
sequelize.authenticate().then(()=>{
 console.log('Connetion has been established successfully .')
},(err)=>{
    console.error('Unable to connect to the database:', err)
});
module.exports=sequelize;