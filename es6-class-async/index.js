import Type from './test-class';

Type.getType(-1).then(num => {
  console.log('Number ',num);
}).catch(reason => {
  console.log('Reson : ',reason);
})

let noOfItems = newLineItems.length;
      for(let lineItem of newLineItems){
        let existingLineItemIndex = _.findIndex(existingLineItems,['ProductId',lineItem.ProductId]);
        if(existingLineItemIndex !== -1){
          //Modify existing lineItem
          let modifiedLineItem = _updateExistingLineItemDetails(existingLineItems[existingLineItemIndex],lineItem);
          if(modifiedLineItem.ChoiceQuantity <= 0){
            //Delete line item
            existingLineItems.splice(existingLineItemIndex,1);
          }else{
            //Update quantity and price
            modifiedLineItem.InStoreTotalPrice = await _getInStoreTotalPrice(modifiedLineItem);
            existingLineItems[existingLineItemIndex] = modifiedLineItem;
          }
        }else{
          //Add new LineItem
          //throw error if quantity is < 0
          let newLineItem = _updateNewLineItemDetails(lineItem);
          if(newLineItem.ChoiceQuantity > 0 ){
            newLineItem.InStoreTotalPrice = await _getInStoreTotalPrice(newLineItem);
            existingLineItems.push(newLineItem);
          }else{
            throw `newLineItem quantity is 0 : ProductId - ${newLineItem.ProductId}`;
          }

        }
        if(--noOfItems === 0){
          return existingLineItems;
        }
      }
