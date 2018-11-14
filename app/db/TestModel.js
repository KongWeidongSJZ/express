
module.exports=function(sequelize, DataTypes){
    return sequelize.define('test',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email:{
            type:Sequelize.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    args:true,
                    msg:'缺少必填项'
                }
            }
        },
        password:{
            type:Sequelize.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    args:true,
                    msg:'缺少必填项'
                }
            }
        },
    })
};
