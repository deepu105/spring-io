
const enum Size {
    'S',
    'M',
    'L',
    'XL',
    'XXL'

};
import { SubCategory } from '../sub-category';
import { Brand } from '../brand';
export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public image?: any,
        public price?: number,
        public size?: Size,
        public availableUntil?: any,
        public subcategory?: SubCategory,
        public brand?: Brand,
    ) {
    }
}
