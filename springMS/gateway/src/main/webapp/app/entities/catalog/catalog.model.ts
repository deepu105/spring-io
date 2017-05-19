
const enum CatalogType {
    'X',
    ' XL',
    ' XXL'

};
export class Catalog {
    constructor(
        public id?: number,
        public name?: string,
        public catType?: CatalogType,
    ) {
    }
}
