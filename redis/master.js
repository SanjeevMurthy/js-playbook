import Redis from 'ioredis';
import onReady from './event';
//let MasterReady = false;

//Comment to connect to local instance
// const OPTIONS = {
//     sentinels : config.sentinels,
//     name : config.masterGroupName,
//     connectTimeout : config.connectionTimeout,
//     enableReadyCheck : true,
//     enableOfflineQueue : false
// };

//const Master = new Redis(OPTIONS);

const Master = new Redis();
//console.log('Master ',Master);
//Master.isReady = false;

Master.on('ready', onReady);
//onReady(Master);



Master.on('close', ()=>{
    Master.isReady = false;
    console.log("Redis Master connection closed");
});

Master.on('connect',function onConnect(){
    Master.isReady = true;
    console.log('Successfully connected to Redis ');
});

function onConnect(response){
    console.log('Successfully connected to Redis ', response);
}

Redis.Promise.onPossiblyUnhandledRejection(function (error) {
    console.log(error);
});

export default Master;
