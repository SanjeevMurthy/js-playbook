import COS_Object from './cos';
import SizeOfObject from './object-size';


let objectsArray = [ ];

// console.log('staring Assign');
// console.time()
// for (var i = 0; i < 1000; i++) {
//   objectsArray[i] = Object.assign({},COS_Object);
// }

console.log('Starting JSON copy ');
console.time()
for (var i = 0; i < 1000; i++) {
  objectsArray[i] = JSON.parse(JSON.stringify(COS_Object));
}
console.timeEnd();
console.log('lenght :',objectsArray.length);
console.log('size : ',SizeOfObject(objectsArray));
