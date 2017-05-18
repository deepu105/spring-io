import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpringIoSharedModule } from '../../shared';
import { SpringIoAdminModule } from '../../admin/admin.module';
import {
    BrandService,
    BrandPopupService,
    BrandComponent,
    BrandDetailComponent,
    BrandDialogComponent,
    BrandPopupComponent,
    BrandDeletePopupComponent,
    BrandDeleteDialogComponent,
    brandRoute,
    brandPopupRoute,
} from './';

const ENTITY_STATES = [
    ...brandRoute,
    ...brandPopupRoute,
];

@NgModule({
    imports: [
        SpringIoSharedModule,
        SpringIoAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        BrandComponent,
        BrandDetailComponent,
        BrandDialogComponent,
        BrandDeleteDialogComponent,
        BrandPopupComponent,
        BrandDeletePopupComponent,
    ],
    entryComponents: [
        BrandComponent,
        BrandDialogComponent,
        BrandPopupComponent,
        BrandDeleteDialogComponent,
        BrandDeletePopupComponent,
    ],
    providers: [
        BrandService,
        BrandPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringIoBrandModule {}
