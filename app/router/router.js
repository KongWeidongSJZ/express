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
router.get('/', function (ctx) {
});
router.get('/create', function (ctx) {
    ctx.body = 'create'
});

module.exports = router;