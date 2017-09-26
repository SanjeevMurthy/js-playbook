import Actions from './action';
import Timeout from './time-out';

function save() {
    console.log('\n\ncalling save')
    setTimeout(() => {
        set();
    }, 2000);
}

function getKey() {
    console.log('\n\ncalling save')
    setTimeout(() => {
        asyncGet();
    }, 100);
}

function set() {
    console.log('\n\ncalling set');
    Actions.set('sanjeev', 'murthy', function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
}

function get() {
    console.log('calling get')
    Actions.get('sanjeev', function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('result : ', res);
        }
    });
}

async function asyncGet() {
    try {
        console.log('calling get')
        await Timeout(500);
        console.log('cachcacheTimeout ',cacheTimeout)
        let value = await Actions.get('sanjeev');
        clearTimeout(cacheTimeout);
        console.log('value : ',value);
    } catch (error) {
        console.log(error);
    } 
}

//save();
getKey();
//asyncGet();