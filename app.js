var Koa=require('koa'),
    app=new Koa(),
    pool=require('./app/db/sequelize-connection'),
    router=require('koa-router')();
router.get('/',function(ctx,next){
    return ctx.body='这是一次测试';
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3005,function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('监听3005成功')
});
