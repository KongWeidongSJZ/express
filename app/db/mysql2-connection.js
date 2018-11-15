//mysql的连接方式
const msq = require('mysql'),
    config = {
        connectionLimit : 10,
        host            : '127.0.0.1',
        user            : 'root',
        password        : 'root',
        database        : 'mysql'
    };
    let pool=msq.createPool(config);
    function query(sql){
        pool.query(sql,function(error, results, fields){
            if(error) throw error;
            console.log(JSON.stringify(results));
            console.log(JSON.stringify(fields))
        });
    }
    module.exports=query;
