module.exports = {
    REQUEST_TYPE: 'text',
    AccessControlAllowOrigin: '*',
    AccessControlAllowMethods: 'GET,HEAD,PUT,POST',
    SUCCESS: function (options) {
        return new Object({
            content: '',
            result: 0,
            desc: 'successful',
            ...options
        })
    },
    SEQUELIZE:{
        database:'test',
        root:'root',
        password:'root',
        config:{
            host: '127.0.0.1',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
        }
    }
}
;
