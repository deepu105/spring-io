import { Category } from '../category';
import { Product } from '../product';
export class SubCategory {
    constructor(
        public id?: number,
        public name?: string,
        public category?: Category,
        public product?: Product,
    ) {
    }
}
