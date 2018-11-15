module.exports=async function (ctx){
    let request = ctx.request.body,
        items = request.items;
    let createItems={};
    items.forEach(function(item){
        createItems[item['fieldName']]=item['value']
    });
    await ctx.sequelize.model('user').create(createItems).then((user)=>{
        ctx.body=ctx.appConfig.SUCCESS({
            content:user
        })
    }).catch((err)=>{
        ctx.body=err
    })
};