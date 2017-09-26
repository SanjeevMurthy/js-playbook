var builder = require('xmlbuilder');
var xml = builder.create('TescoDataExchange');
            xml.ele('xmlbuilder')
                .ele('repo', 'git://github.com/oozcitak/xmlbuilder-js.git')
                  .end({
                      pretty: true,

                    });


                    xml.ele('xmlbuilder1')
                        .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')





// var xml = builder.create('TescoDataExchange',{ headless: true })
//   .ele('build')
//     .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
//   .end({ pretty: true});


  // let GroceryBasketItemEntityAttributes = {
  //   '@ChargeProductType': 'Normal',
  //   '@IsSelectedByQuantity': 'Yes',
  // };
  //
  // let GroceryBasketItemEntity = xml.ele('GroceryBasketItemEntity');
  // GroceryBasketItemEntity.ele(GroceryBasketItemEntityAttributes);
  // xml.end({
  //     pretty: false,
  //     indent: '',
  //     newline: '\n',
  //     allowEmpty: false,
  //     spacebeforeslash: ''
  //   });
// var xml = builder.create({
//   root: {
//     xmlbuilder: {
//       repo: {
//         '@type': 'git', // attributes start with @
//         '#text': 'git://github.com/oozcitak/xmlbuilder-js.git' // text node
//       }
//     }
//   }
// });

let Envelope = builder.create('s:Envelope');

  let EnvelopeAttributes = {
    '@xmlns:a': `http://www.w3.org/2005/08/addressing`,
    '@xmlns:s' : `http://www.w3.org/2003/05/soap-envelope`
  }
  Envelope.ele(EnvelopeAttributes);

  let EnvelopBody = Envelope.ele('s:Body');
  let SendNotification = EnvelopBody.ele('SendNotification');
  let Notification = SendNotification.ele('notification');

  Envelope.end({
      pretty: true,
      indent: '',
      newline: '',
      allowEmpty: false,
      spacebeforeslash: ''
    });
console.log(Envelope.toString());

 //console.log(xml.toString());

// var root = builder.create('squares')
// root.com('f(x) = x^2');
// for(var i = 1; i <= 5; i++)
// {
//   var item = root.ele('data');
//   item.att('x', i);
//   item.att('y', i * i);
// }
// root.end({pretty:true});
// console.log(root);
