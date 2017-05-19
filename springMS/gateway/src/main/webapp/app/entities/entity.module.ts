import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatewayBrandModule } from './brand/brand.module';
import { GatewayProductModule } from './product/product.module';
import { GatewayCategoryModule } from './category/category.module';
import { GatewaySubCategoryModule } from './sub-category/sub-category.module';
import { GatewayCatalogModule } from './catalog/catalog.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        GatewayBrandModule,
        GatewayProductModule,
        GatewayCategoryModule,
        GatewaySubCategoryModule,
        GatewayCatalogModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayEntityModule {}
