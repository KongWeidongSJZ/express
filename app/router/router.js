const router = require('koa-router')(),
    config = require('../../config');
router.post('/member/register', async (ctx) => {
    let request = ctx.request.body,
        items = request.items;
    let createItems={};
    items.forEach(function(item){
        createItems[item['fieldName']]=item['value']
    });
    await ctx.sequelize.model('user').create(createItems).then((user)=>{
        ctx.body=config.SUCCESS({
            content:user
        })
    }).catch((err)=>{
        ctx.body=err
    })
});
router.get('/', function (ctx) {
});
router.get('/remove',async function (ctx) {
    await ctx.sequelize.drop().then(()=>{
        ctx.body='删除成功'
    }).catch((err)=>{
        ctx.body=err
    })
});

module.exports = router;