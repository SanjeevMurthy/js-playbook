var parseString = require('xml2js').parseString;
var xml = `<?xml version="1.0" encoding="utf-8"?>
<TescoDataExchange>
	<Customer>
		<IsFirstTimeShopper>false</IsFirstTimeShopper>
		<IsInAmendment>true</IsInAmendment>
		<Title>Mr  </Title>
		<SurName>Relangi</SurName>
		<Status>Pending</Status>
		<MobilePhoneNumber />
		<EveningPhoneNumber>09441369749</EveningPhoneNumber>
		<DayTimePhoneNumber>07204647159</DayTimePhoneNumber>
	</Customer>
	<Order>
		<Orderlines>
			<OrderLine>
				<ProductMeasureType>Unit</ProductMeasureType>
				<UnitPrice>1.50</UnitPrice>
				<Unit>Item</Unit>
				<TotalPrice>54.00</TotalPrice>
				<Quantity>36</Quantity>
				<Weight>0.000</Weight>
				<Product>Disney Apples Pack </Product>
				<Exist>Exist</Exist>
				<Description />
			</OrderLine>
			<OrderLine>
				<ProductMeasureType>Unit</ProductMeasureType>
				<UnitPrice>3.75</UnitPrice>
				<Unit>Item</Unit>
				<TotalPrice>37.50</TotalPrice>
				<Quantity>10</Quantity>
				<Weight>0.000</Weight>
				<Product>Mccain Home Chips 2.25Kg</Product>
				<Exist>Exist</Exist>
				<Description />
			</OrderLine>
			<OrderLine>
				<ProductMeasureType>Unit</ProductMeasureType>
				<UnitPrice>0.75</UnitPrice>
				<Unit>Item</Unit>
				<TotalPrice>7.50</TotalPrice>
				<Quantity>10</Quantity>
				<Weight>0.000</Weight>
				<Product>Tesco Everyday Value 3 Way Cookchips 1.5Kg</Product>
				<Exist>Exist</Exist>
				<Description />
			</OrderLine>
		</Orderlines>
		<Delivery>
			<StartTime>6pm</StartTime>
			<EndTime>7pm</EndTime>
			<Date>Sunday 10th September</Date>
			<Charge>4.00</Charge>
			<BaglessDelivery>False</BaglessDelivery>
			<DeliveryOption>VanDelivery</DeliveryOption>
		</Delivery>
		<AmendThisOrder>
			<EndTime>23:46</EndTime>
			<EndDate>Saturday 9th September</EndDate>
		</AmendThisOrder>
		<Number>16260150</Number>
		<amendments>
			<addeditems>
				<product>
					<ChoiceQuantity>10</ChoiceQuantity>
					<ChoiceWeight>0.000</ChoiceWeight>
					<MeasureType>Unit</MeasureType>
					<ProductDescription>Mccain Home Chips 2.25Kg</ProductDescription>
					<ProductInStorePrice>3.75</ProductInStorePrice>
					<ProductInStoreTotalPrice>37.50</ProductInStoreTotalPrice>
				</product>
				<product>
					<ChoiceQuantity>10</ChoiceQuantity>
					<ChoiceWeight>0.000</ChoiceWeight>
					<MeasureType>Unit</MeasureType>
					<ProductDescription>Tesco Everyday Value 3 Way Cookchips 1.5Kg</ProductDescription>
					<ProductInStorePrice>0.75</ProductInStorePrice>
					<ProductInStoreTotalPrice>7.50</ProductInStoreTotalPrice>
				</product>
			</addeditems>
			<removeditems />
			<modifieditems />
		</amendments>
	</Order>
	<Address>
		<Postcode>AL74FG</Postcode>
		<Address2>&amp;Chambers| &amp; Company&amp;| Grove</Address2>
		<Address1>0011</Address1>
		<Address4>Welwyn Garden City</Address4>
	</Address>
	<AlternativeName>
		<Name>home</Name>
	</AlternativeName>
	<Store>
		<OrderDetail>
			<ItemCount>56</ItemCount>
			<Clubcard>
				<totalpoints>96</totalpoints>
				<promotionalpoints>0</promotionalpoints>
				<points>96</points>
				<greenpoints>0</greenpoints>
			</Clubcard>
			<Vouchers>
				<Voucher />
			</Vouchers>
			<GiftCards>
				<Giftcard />
			</GiftCards>
			<eCoupons>
				<eCoupon />
			</eCoupons>
			<Promocodes>
				<Promocodes /></Promocodes>
			<StaffDiscount>0</StaffDiscount>
			<TotalLeftToPay>96.00</TotalLeftToPay>
			<TotalSavings>7</TotalSavings>
			<GuidePrice>92.00</GuidePrice>
			<SurChargePrice>0</SurChargePrice>
		</OrderDetail>
	</Store>
	<Charges>
		<IndividualCharges />
	</Charges>
</TescoDataExchange>`;
let jsonObj = { };
parseString(xml, function (err, result) {
  jsonObj = result;
    console.log(result);
});
