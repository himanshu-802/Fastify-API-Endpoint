async function routes(fastify,options){
    fastify.get('/g',async(req,res)=>{
        res.redirect('https://google.com');
    });
};
module.exports= routes;