function buildContarctGroceryBasketItemEntities(context, orderEntity, ContractEntity) {
  let GroceryBasketItemEntities = ContractEntity.ele('GroceryBasketItemEntities');
  orderEntity.LineItems.forEach(lineItem => {
    let GroceryBasketItemEntity = GroceryBasketItemEntities.ele('GroceryBasketItemEntity');
    let GroceryBasketItemEntityAttributes = {
      '@ChargeProductType': `${lineItem.ChargeProductType}`,
      '@IsSelectedByQuantity': `${lineItem.IsSelectedByQuantity}`,
      '@ProductMaxWeight': `${lineItem.MaxWeight}`,
      '@ProductInStoreTotalPrice': `${lineItem.InStoreTotalPrice}`,
      '@ProductAgerageWeight': `${lineItem.AverageWeight}`,
      '@ChoiceQuantity': `${lineItem.ChoiceQuantity}`,
      '@ChoiceWeight': `${lineItem.ChoiceWeight}`,
      '@AddedDateTime': `${lineItem.AddedDateTime}`,
      '@LastUpdated': `${lineItem.LastUpdated}`,
      '@IsUntrusted': false,//Check
      '@BaseProductId': `${lineItem.BaseProductId}`,
      '@ProductInStorePrice': `${lineItem.InStorePrice}`,
      '@ProductId': `${lineItem.ProductId}`,
      '@ProductInStoreQuantity': `${lineItem.InStoreQuantity}`,
      '@ProductDescription': `${lineItem.Description}`,
      '@ProductWeight': `${lineItem.Weight}`,
      '@ProductVolume': `${lineItem.Volume}` // TO DO :pickernote, display title, lookforthissection, promotionidentifier,
    };

    if (lineItem.PickerNote) {
      GroceryBasketItemEntityAttributes['@PickNote'] = encodeURIComponent(lineItem.PickerNote);
    }

    GroceryBasketItemEntity.ele(GroceryBasketItemEntityAttributes);
    GroceryBasketItemEntity.ele('ProductType', lineItem.Type);
    GroceryBasketItemEntity.ele('MeasureType', lineItem.MeasureType);
    GroceryBasketItemEntity.ele('UnitOfSale', lineItem.UnitOfSale);
    GroceryBasketItemEntity.ele('SubstitutionOption', lineItem.SubstitutionOption);
    GroceryBasketItemEntity.ele('ContractLineItemPromotion', null);//null by default
    GroceryBasketItemEntity.ele('LineNumber', (orderEntity.LineItems.indexOf(lineItem) + 1));
  });
}
