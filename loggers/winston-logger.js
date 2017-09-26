import winston from 'winston';
import util from 'util';
import moment from 'moment';
import fs from 'fs';

function Logger(env,level){
  const logDirectory = (env === 'dev')? 'log' : 'COSV2_LOGS';
  const logger = (env === 'dev')? getDevLogger(logDirectory) : getProdLogger(logDirectory);

  function requestProfiler(){
    return function(req,res,next){
      req.profileInfo = util.format('%s, %s, %s, %s',req.requestId , req.method, req.originalUrl , res.statusCode);
      logger.profile(req.profileInfo);
      let response=res.send;
      res.send = function(){
        response.apply(res,arguments);
        logger.profile(req.profileInfo);
      };
      next();
    };
  }

  return {
    requestProfiler,
    logger
  };
}

function getDevLogger(logDir){
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }
  return new (winston.Logger)({
    transports :[
    new(winston.transports.Console)({
      colorize:'all',
      handleExceptions:true,
      humanReadableUnhandledException : true}),
    new(winston.transports.File)({
      filename:`${logDir}/customer-order-v2.log`,
      timestamp : moment(),
      prepend : true,
      level : 'debug',
      handleExceptions : true,
      humanReadableUnhandledException : true
    })
   ]
  });
}

function getProdLogger(logDir){
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }
  return new (winston.Logger)({
    transports : [
      new(require('winston-daily-rotate-file'))({
        filename:`${logDir}/-customer-order-v2.log`,
        timestamp : moment(),
        prepend:true,
        level : 'info',
        maxsize: 5242880, //5MB
        maxFiles: 10,
        json:true,
        handleExceptions : true,
        humanReadableUnhandledException : true
      })
    ],
    exitOnError: false
  });
}

module.exports = new Logger(process.env.NODE_ENV);
