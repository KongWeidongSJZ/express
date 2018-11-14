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
    }
}
;
