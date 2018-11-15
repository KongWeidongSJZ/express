const router = require('koa-router')(),
    methods = require('./methods');
router.post('/member/register',methods['memberRegister']);
router.get('/', function (ctx) {
});
router.get('/remove', async function (ctx) {
    await ctx.sequelize.drop().then(() => {
        ctx.body = '删除成功'
    }).catch((err) => {
        ctx.body = err
    })
});


module.exports = router;