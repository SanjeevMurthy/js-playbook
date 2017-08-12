async function _getLineItemsForUpdate(order, newLineItems){
  if(!order.LineItems){
    order.LineItems = [];
  }
  let existingLineItems = order.LineItems;
  try {
    if(_.isEmpty(newLineItems) || _.isNil(newLineItems)){
      existingLineItems = [ ];
      return existingLineItems;
    }else{
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
    }
  } catch (buildLineItemsException) {
    throw buildLineItemsException;
  }
}
