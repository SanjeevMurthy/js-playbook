export default function Timeout(time) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           reject(new Error('Cache TIMEOUT'));
        }, time);
    });
}



// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function sleep(fn, ...args) {
//     await timeout(3000);
//     return fn(...args);
// }