import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SpringIoBrandModule } from './brand/brand.module';
import { SpringIoProductModule } from './product/product.module';
import { SpringIoCategoryModule } from './category/category.module';
import { SpringIoSubCategoryModule } from './sub-category/sub-category.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SpringIoBrandModule,
        SpringIoProductModule,
        SpringIoCategoryModule,
        SpringIoSubCategoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringIoEntityModule {}
