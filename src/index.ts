import express, { Application  } from "express";
import  bodyParser from 'body-parser';
import errorhandler from 'strong-error-handler';
import Routes from "./api/routes";
import path from "path";
export default class ServerLink {

  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    // middleware for parsing application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(path.join(__dirname, '/images')))
    app.use('/', express.static(`${__dirname}/images`))
    app.get('/images/:img', function(req, res){
      res.sendFile(path.join(path.resolve('.'),`/images/${req.params.img}`) );
    });
    
    // middleware for json body parsing
    app.use(bodyParser.json({limit: '5mb'}));

    // enable corse for all origins
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

      next();
    });
    /* app.use(cors(corsOptions));
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true })); */
    app.use(errorhandler({
      debug: process.env.ENV !== 'prod',
      log: true,
    }));
    
  }
}