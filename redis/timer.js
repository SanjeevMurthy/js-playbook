const util = require('util');
const setImmediatePromise = util.promisify(setTimeout);

setImmediatePromise(100, 'foobar').then((value) => {
    //return 'timeout';
    console.log(this);
    console.log('done timeout');
});



function timeout() {
    return setTimeout(function () {
        console.log('returning true');
        return 'true';
    }, 10);
}

// or with async function
async function timerExample() {
    try {
        console.log('Before I/O callbacks');
        let cacheTimeOut = timeout();
        await setImmediatePromise();
        if(cacheTimeOut._called){
            return 'timed out value';
        }else{
            console.log('After I/O callbacks');
            return 'not called';
        }
        //return value;
        
    } catch (error) {
        console.log('error >>>', error);
    }

}
timerExample().then(value =>{
    console.log(value);
})



// function promise10(num) {
//     return new Promise((resolve, reject) => {
//         console.log('Called promise10');
//         if (num > 10) {
//             setTimeout(function () {
//                 console.log('resolving promise10');
//                 resolve(num + 10);
//             }, 4000);
//         } else {
//             reject(num);
//         }
//     });
// }


// function promise20(num) {
//     return new Promise((resolve, reject) => {
//         console.log('Called promise20');
//         if (num > 20) {
//             setTimeout(function () {
//                 console.log('resolving promise20');
//                 resolve(num + 20);
//             }, 2000);

//         } else {
//             reject(num);
//         }
//     });
// }

// function promise30(num) {
//     console.log('Called promise30');
//     return new Promise((resolve, reject) => {
//         if (num > 30) {
//             setTimeout(function () {
//                 console.log('resolving promise30');
//                 resolve(num + 30);
//             }, 3000);

//         } else {
//             reject(num);
//         }
//     });
// }



// async function getAll(num10, num20, num30) {
//     let allAtOnce = [
//         promise10(num10),
//         promise20(num20),
//         promise30(num30)
//     ];
//     console.log('allAtOnce \n\n', allAtOnce);
//     let result = await Promise.all(allAtOnce);
//     console.log('\n\nresult ', result);
//     return result;
// }


// getAll(11, 21, 31).then(result => {
//     console.log('getAllResult ', result);
// }).catch(reason => {
//     console.log('reason ', reason);
// })