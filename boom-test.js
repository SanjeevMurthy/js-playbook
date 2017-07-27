var Boom = require('boom');


var error = new Error('Unexpected input');
//console.log("error ",error);
let boomified = Boom.boomify(error, { statusCode: 400 });
console.log(JSON.stringify(boomified));
console.log("Boomified >>> ",Object.getOwnPropertyNames(boomified));
console.log("Stack ",boomified.stack);
console.log("Message ",boomified.message);

var headers = {
    'Authorization':'AccessToken=Auth1=http%253a%252f%252fschemas.xmlsoap.org%252fws%252f2005%252f05%252fidentity%252fclaims%252fname%3Dusertest5%2540dbt.com%26http%253a%252f%252fschemas.xmlsoap.org%252fws%252f2005%252f05%252fidentity%252fclaims%252fnameidentifier%3Dusertest5%2540dbt.com%26http%253a%252f%252fschemas.microsoft.com%252fws%252f2008%252f06%252fidentity%252fclaims%252fauthenticationmethod%3Dhttp%253a%252f%252fschemas.microsoft.com%252fws%252f2008%252f06%252fidentity%252fauthenticationmethod%252fpassword%26http%253a%252f%252fschemas.microsoft.com%252fws%252f2008%252f06%252fidentity%252fclaims%252fauthenticationinstant%3D2017-07-18T06%253a47%253a18.615Z%26http%253a%252f%252fschemas.tesco.com%252fws%252f2011%252f12%252fidentity%252fclaims%252fuserkey%3D2301180500%26http%253a%252f%252fschemas.xmlsoap.org%252fws%252f2005%252f05%252fidentity%252fclaims%252flocality%3D2654%26http%253a%252f%252fschemas.xmlsoap.org%252fws%252f2005%252f05%252fidentity%252fclaims%252fpostalcode%3DAL74FG%26http%253a%252f%252fschemas.microsoft.com%252fws%252f2008%252f06%252fidentity%252fclaims%252frole%3D1000%26Issuer%3Dhttp%253a%252f%252fidentityserver.tesco.com%252ftrust%252finitial%26Audience%3Dhttps%253a%252f%252fapi.tesco.com%252f%26ExpiresOn%3D1500446838.615%26HMACSHA256%3Ddnb36jUKJovdyXMjgDFZqSuiYahGOBvYWnVALV6%252bmgA%253d&AppKey=vyvYgzkd-EWZwiIfbwd0AL5HbQ-Oj_poUha8ltyttfL0aM1x3y2lRABc56IJzYP-0',
    'Content-Type': 'application/xml',
    'Accept': 'application/json'
    }

console.log("Header ",headers.Authorization);
