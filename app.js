var Koa=require('koa'),
    app=new Koa(),
    router=require('./app/router/router'),
    bodyPaser=require('koa-bodyparser'),
    sequelize = require('./app//db/sequelize-connection'),
    UserModel=require('./app/db/UserModel'),
    CONFIG=require('./config');
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
    ctx.request.body=typeof ctx.request.body=='string'?JSON.parse(ctx.request.body):ctx.request.body;
    return next()
});
app.use(async (ctx,next)=>{
    if(ctx.path=='/create'){
        sequelize.import('user', UserModel);
        sequelize.sync();
    }
    ctx.db={};
    ctx.db.User=UserModel(sequelize);
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
