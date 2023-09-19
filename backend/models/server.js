const cors = require("cors");
const express = require("express");
const dbConnection = require("../database/database");
const routes = require("../routes/routes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.rootPath = "/";

    this.middlewares();
    this.routes();
    this.dbStarter();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.rootPath, routes);
  }

  async dbStarter() {
    await dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
