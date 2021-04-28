import "reflect-metadata";
import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import "./database";
import { routes } from './routes';
import { UserResolver } from "./resolvers/UserResolver";

class Http {
  public app: express.Application;
  public io: Server;

  constructor() {
    this.app = express();

    this.app.use(routes);
    this.frontWeb();
    this.createServerHttp();

    this.startApolloServer();
  }

  frontWeb() {
    this.app.use(express.static(path.join(__dirname, "..", "public")));
    this.app.set("views", path.join(__dirname, "..", "public"));
    this.app.engine("html", require("ejs").renderFile);
    this.app.set("view engine", "html");

    this.app.get("/pages/client", (req, res) => {
      return res.render("html/client.html")
    });

    this.app.get("/pages/admin", (req, res) => {
      return res.render("html/admin.html")
    });
  }

  createServerHttp() {
    const http = createServer(this.app);
    this.io = new Server(http);

    this.io.on("connection", (socket: Socket) => {
      console.log("Se conectou ", socket.id);
    })
  }

  async startApolloServer() {
    const app = this.app;

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [UserResolver],
      }),
    });

    apolloServer.applyMiddleware({ app });
  }


}

export default new Http();