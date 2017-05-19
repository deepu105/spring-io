import { Product } from '../product';
export class Brand {
    constructor(
        public id?: number,
        public name?: string,
        public startDate?: any,
        public product?: Product,
    ) {
    }
}
