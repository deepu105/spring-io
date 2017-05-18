import { Product } from '../product';
import { User } from '../../shared';
export class Brand {
    constructor(
        public id?: number,
        public name?: string,
        public startDate?: any,
        public product?: Product,
        public user?: User,
    ) {
    }
}
