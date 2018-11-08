var Koa=require('koa'),
    app=new Koa(),
    router=require('./app/router/router'),
    pool=require('./app/db/sequelize-connection');
app.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*');
    ctx.set('Access-Control-Allow-Methods','GET,HEAD,PUT,POST,DELETE,PATCH');
    await next()
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3005,function(err){
    if(err){
        console.log(err);
        return
    }
    console.log('监听3005成功')
});
