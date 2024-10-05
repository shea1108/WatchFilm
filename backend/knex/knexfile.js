module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'movie_db'
      }
    },
    production: {
      client: 'mysql',
      connection: {
        host: 'production-server',
        user: 'root',
        password: '',
        database: 'movie_db'
      }
    }
  };
  