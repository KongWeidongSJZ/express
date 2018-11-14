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
});
router.get('/', function (ctx) {
});
router.get('/create', function (ctx) {
    console.log('同步库里不存在的表');
    sequelize.import('user', UserModel);
    sequelize.sync().then(()=>{
        ctx.body = 'create'
    }).catch((err)=>{
        ctx.body=err
    });
});
router.get('/remove', function (ctx) {
    console.log('删除表中数据');
    ctx.db.User.destroy()
});

module.exports = router;