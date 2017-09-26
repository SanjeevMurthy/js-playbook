import Master from './master';
import delay from './delay';

// exports.get =  function get(key, callback) {
//     //console.log("Calling Redis");
//     if (Master.isReady) {
//         //let cacheTimeout = new Timeout(TIMEOUT, callback);
//         Master.get(key, (slaveError, response) => {
//             // if (cacheTimeout._called) {
//             //     //console.log("cacheTimeout called");
//             //     return callback("Cache Timeout", null)
//             // }
//             //clearTimeout(cacheTimeout);
//             if (slaveError || !response[0]) {
//                 return callback("Cache Null", null);
//             }
//             try {
//                // let result = JSON.parse(response);
//                 callback(null, response);
//             } catch (e) {
//                 callback(e, null);
//             }
//         });
//     } else {
//         return callback('SLAVE_ERROR', null);
//     }
// }

exports.set = function set(key, value, callback) {
    if (Master.isReady) {

        //let fieldValueMap = [];
        //data = data || [];
        // fieldValueMap.push([field, JSON.stringify(data)]);
        Master.set(key, value, (err, response) => {
            if (err) {
                //console.log("Error in setting cache ",err);
            } else {
                //console.log("%s : %s saved to cache",key,field);
                //Master.expire(key, 100);
                callback('SUccess', response);
            }
        });
    } else {
        console.log('MASTER_ERROR');
        console.log(Master)
    }
}


exports.get = async function get(key, callback) {
    try {
        //let cacheTimeout = new Timeout(50);
        await delay(100);
        let value = await Master.get(key);
        //clearTimeout(cacheTimeout);
        return value;
    } catch (error) {
        throw error
    }

}