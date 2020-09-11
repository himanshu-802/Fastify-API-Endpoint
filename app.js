const fastify = require('fastify')();

fastify.register(require('./routes/users'));

fastify.listen(3000,function(err,address){
    if(err){
        console.log(err);
        process.exit(1);
    }
    else{
        console.log("Server running on 3000");
    }
});