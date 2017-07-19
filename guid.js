function createGuid()
{
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
     console.log("C value \t\t",c);
      var r = Math.random()*16|0;
      console.log("r value \t\t",r);
      console.log("(r&0x3|0x8) value \t",(r&0x3|0x8));
      var v = c === 'x' ? r : (r&0x3|0x8);
      console.log("v value \t\t",v);
      console.log("\n");
      return v.toString(16);
   });
}

var guid = createGuid();
 console.log("GUID ",guid);
