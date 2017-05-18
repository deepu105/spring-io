
const enum CategoryStatus {
    'AVAILABLE',
    'RESTRICTED',
    'DISABLED'

};
import { SubCategory } from '../sub-category';
export class Category {
    constructor(
        public id?: number,
        public name?: string,
        public status?: CategoryStatus,
        public subcategory?: SubCategory,
    ) {
    }
}
