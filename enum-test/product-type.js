import Enum from 'enum';
const ProductType = new Enum({
	'LooseQuantity': '1',
	'2': 'LooseWeight',
	'3': 'Single',
	'4': 'VarPack',
	'5': 'CatchWeight'
});

export default ProductType;
