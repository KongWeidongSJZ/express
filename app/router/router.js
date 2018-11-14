const router = require('koa-router')(),
    config = require('../../config');
router.post('/member/register', async (ctx) => {
    await ctx.db.User.findAndCountAll().then((user) => {
        if (user) {
            return ctx.body = config.SUCCESS({
                content: user
            })
        }
    })
});
router.get('/', function (ctx) {});
router.get('/create', function (ctx) {
    console.log('同步库里不存在的表');
    ctx.body = 'create'
});

module.exports = router;