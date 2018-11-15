const Sequelize = require('sequelize'),
    config=require('../../config')['SEQUELIZE'],
    sequelize = new Sequelize(config['database'], config['root'], config['password'],config['config'] );
module.exports = sequelize;