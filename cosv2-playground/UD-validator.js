import { BusinessError } from '../../common/error-codes';
import { BusinessException } from '../../common/utilities/exceptions';

exports.validateDeliveryEntity = async function validateDeliveryEntity(delivery) {
  let error = {};
  if (delivery == null) {
    throw new BusinessException(BusinessError.INVALID_DELIVERY_ENTITY);
  } else if (delivery.length == 0) {
    context.isRemoveDeliveryEntity = true;
    return context;
  } else if (delivery[0].SlotStartDateTime < new Date().toISOString()) {
    context.isRemoveDeliverySlot = true;
    return context;
  } else {
    context.isAddressUpdated = false;
    context.isSlotUpdated = false;
    let deliveryObject = delivery[0];
    if (deliveryObject.SlotState === 'booked' || deliveryObject.SlotState === 'reserved') {
      (isValidDeliverySlot(deliveryObject)) ? context.isSlotUpdated = true: error.invalidSlotDetails = true;
    }
    if (deliveryObject.Addresses && !_.isEmpty(deliveryObject.Addresses)) {
      (isValidDeliveryAddresses(deliveryObject.Addresses)) ? context.isAddressUpdated = true: error.invalidAddresses = true;
    }
    if (!error.invalidSlotDetails && !error.invalidAddresses) {
      return context;
    } else {
      throw error;
    }
  }
};


function  isValidDeliverySlot(delivery) {
  return (!delivery.SlotStartDateTime || !delivery.SlotEndDateTime || !delivery.SlotCutoffDateTime || !validateDeliveryCharges(delivery.Charges))?false:true;
}

function isValidDeliveryAddresses(addresses){
   if(addresses.BillingAddress && addresses.DeliveryAddress){
     let validBillingAddress = validateAddress(addresses.BillingAddress);
     let validDeliveryAddress = validateAddress(addresses.DeliveryAddress);
     return (validBillingAddress && validDeliveryAddress)?true:false;
   }else if(addresses.BillingAddress){
     return validateAddress(addresses.BillingAddress);
   }else {
     return validateAddress(addresses.DeliveryAddress);
   }
}

function validateDeliveryCharges(charges){
  return (!charges || !charges.DeliveryCharge || !charges.DeliveryCharge.Amount)?false:true;
}

function validateAddress(address){
  return (!address.Nickname || !address.Postcode || !address.MartiniAddressId)?false:true;
}



"InvalidDeliveryEntity":{
+    "code":"CUOR_2034",
+    "message":"Delivery Entity is either Null or Invalid",
+    "status":400
   }



   exports.updateDeliveryV1 = async function updateDeliveryV1(context, delivery) {
  let validationError, validatedContext;
  [validationError, validatedContext] = await
};
