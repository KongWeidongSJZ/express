const router = require('koa-router')(),
    config = require('../../config');
router.post('/member/register', async (ctx) => {
    let request = ctx.request.body,
        items = request.items;
    let createItems={};
    items.forEach(function(item){
        createItems[item['fieldName']]=item['value']
    });
    await ctx.db.User.create().then((user)=>{
        ctx.body=config.SUCCESS({
            content:user
        })
    }).catch((err)=>{
        ctx.body=err
    })
    // await ctx.db.User.findAndCountAll().then((user) => {
    //     if (user) {
    //         return ctx.body = config.SUCCESS({
    //             content: user
    //         })
    //     }
    // })
});
router.get('/', function (ctx) {
});
router.get('/create', function (ctx) {
    console.log('同步库里不存在的表');
    ctx.body = 'create'
});

module.exports = router;