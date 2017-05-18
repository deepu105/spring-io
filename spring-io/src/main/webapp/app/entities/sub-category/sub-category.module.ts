import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpringIoSharedModule } from '../../shared';
import {
    SubCategoryService,
    SubCategoryPopupService,
    SubCategoryComponent,
    SubCategoryDetailComponent,
    SubCategoryDialogComponent,
    SubCategoryPopupComponent,
    SubCategoryDeletePopupComponent,
    SubCategoryDeleteDialogComponent,
    subCategoryRoute,
    subCategoryPopupRoute,
    SubCategoryResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...subCategoryRoute,
    ...subCategoryPopupRoute,
];

@NgModule({
    imports: [
        SpringIoSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        SubCategoryComponent,
        SubCategoryDetailComponent,
        SubCategoryDialogComponent,
        SubCategoryDeleteDialogComponent,
        SubCategoryPopupComponent,
        SubCategoryDeletePopupComponent,
    ],
    entryComponents: [
        SubCategoryComponent,
        SubCategoryDialogComponent,
        SubCategoryPopupComponent,
        SubCategoryDeleteDialogComponent,
        SubCategoryDeletePopupComponent,
    ],
    providers: [
        SubCategoryService,
        SubCategoryPopupService,
        SubCategoryResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringIoSubCategoryModule {}
