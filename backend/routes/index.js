const homeRouter = require('./HomeRoute')


function route(app) {

  app.use('/', homeRouter);
    
  }
  
module.exports = route;