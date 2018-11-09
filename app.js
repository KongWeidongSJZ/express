var Koa=require('koa'),
    app=new Koa(),
    router=require('./app/router/router'),
    bodyPaser=require('koa-bodyparser'),
    CONFIG=require('./config'),
    pool=require('./app/db/sequelize-connection');
app.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin',CONFIG.AccessControlAllowOrigin);
    ctx.set('Access-Control-Allow-Methods',CONFIG.AccessControlAllowMethods);
    await next()
});
app.use(bodyPaser({
    enableTypes:CONFIG.REQUEST_TYPE,
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422);
    }
}));
app.use(function(ctx ,next){
    ctx.request.body=JSON.parse(ctx.request.body);
    return next()
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
