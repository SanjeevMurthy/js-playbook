const EventEmitter = require('events');
const util = require('util');
const setImmediatePromise = util.promisify(setTimeout);

class myEmitter extends EventEmitter {
    constructor(time){
        super();
    }
}

function set(e,time){
    setTimeout(()=>{
        console.log('emit ->> timeout');
        e.emit('timeout');
    },time)
}


function getValue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(100);
        },500);
    });
}


async function timerExample() {
    try {
        console.log('Before I/O callbacks');
        let cacheTimeOut = new myEmitter();
        cacheTimeOut.once('timeout',()=>{
            console.log('Received Timeout');
            throw new Error('timeout');
        });
        set(cacheTimeOut, 1000);
        // setTimeout(()=>{
        //     console.log('emit ->> timeout');
            
        // },50)
        let value = await getValue();
        
        //cacheTimeOut.emit('timeout');
        return value;
        
    } catch (error) {
        throw error;
        console.log('error >>>', error);
    }

}

timerExample().then(value =>{
    console.log("Result ",value);
}).catch(reason => {
    console.log('Failed ',reason);
})