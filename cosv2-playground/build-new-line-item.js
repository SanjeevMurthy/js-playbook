function _buildNewLineItemDetails(lineItem){
  if((!lineItem.ChoiceQuantity || _.isEmpty(lineItem.ChoiceQuantity)) && (!lineItem.ChoiceWeight || _.isEmpty(lineItem.ChoiceWeight))){
    throw `Cannot add lineItem : invalid lineItem details ${lineItem.ProductId}`;
  }else{
    let newLineItem = { };
    let time = getTime();
    newLineItem.DeliveryGroupId = 1; //TODO : need to discuss on mapping DeliveryGroupId:ProductId
    newLineItem.ProductId = lineItem.ProductId;
    newLineItem.BaseProductId = lineItem.BaseProductId;
    newLineItem.Description = lineItem.Description;
    newLineItem.InStorePrice = lineItem.InStorePrice;
    newLineItem.InStoreQuantity = 0; //TODO : need to be discussed
    //newLineItem.ChoiceQuantity = lineItem.ChoiceQuantity ? (+lineItem.ChoiceQuantity) : 0;
    newLineItem.QuantityOriginal = 0;
    //newLineItem.ChoiceWeight = lineItem.ChoiceWeight ? (+lineItem.ChoiceWeight) : 0;
    newLineItem.WeightOriginal = 0;
    newLineItem.MaxWeight = lineItem.MaxWeight ? (+lineItem.MaxWeight) : 0;
    newLineItem.AgerageWeight = 0;
    newLineItem.Weight = lineItem.Weight;
    newLineItem.Volume = lineItem.Volume;
    newLineItem.Type = lineItem.Type;
    newLineItem.ChargeProductType = lineItem.ChargeProductType;
    //newLineItem.IsSelectedByQuantity = true; //TODO : need to check for false condition
    newLineItem.SubstitutionOption = lineItem.SubstitutionOption ? lineItem.SubstitutionOption : "";
    newLineItem.PickerNote = lineItem.PickerNote ? lineItem.PickerNote : "";
    newLineItem.IsNewlyAdded = true;
    newLineItem.AddedDateTime = time;
    newLineItem.LastUpdated = time;
    return newLineItem;
  }
}
