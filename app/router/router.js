const router = require('koa-router')();
router.post('/member/register', async (ctx) => {
    function getInfo() {
        return new Promise(function (res, rej) {
            setTimeout(function(){
                res({
                    result: 0,
                    content: {
                        a: 1
                    }
                })
            },1000)
        });
    }
    ctx.body = await getInfo();
});
router.get('/', function (ctx) {
    ctx.body='hello world'
});

module.exports = router;