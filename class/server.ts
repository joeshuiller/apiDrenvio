import express from "express";
import dotenv from "dotenv";
import * as https from "https"
import fs from "fs";
import path from "path";
import { connectDB } from "../src/db/config";

export default class Server{
    public https_options = {
        key: fs.readFileSync(path.join(path.resolve('.'),'/class/crt/local/server.key')),
        cert: fs.readFileSync(path.join(path.resolve('.'),'/class/crt/local/server.crt')),
        ca: [
          fs.readFileSync(path.join(path.resolve('.'),'/class/crt/local/server.crt')),
          fs.readFileSync(path.join(path.resolve('.'),'/class/crt/local/server.crt'))
        ]
      };
    public PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    public HOST: string = process.env.HOST ? process.env.HOST : "localhost";

    private static _intance: Server;
    public app: express.Application;


    private httpsServer: https.Server;

    private constructor(){
        this.app  = express();
        this.httpsServer =  https.createServer(this.https_options,this.app);
    }

    public static get instance(){
        return this._intance || ( this._intance = new this())
    }

    async start(){
        dotenv.config();
        const  PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
        const  HOST: string = process.env.HOST ? process.env.HOST : "localhost";
        connectDB();
        this.httpsServer.listen(PORT, HOST, function () {
          console.log(`Server is running on port ${HOST}:${PORT}.`);
        }).on("error", (err: any) => {
          if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
          } else {
            console.log(err);
          }
        });
    }

}