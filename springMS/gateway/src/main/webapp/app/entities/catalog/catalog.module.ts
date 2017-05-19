import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from '../../shared';
import {
    CatalogService,
    CatalogPopupService,
    CatalogComponent,
    CatalogDetailComponent,
    CatalogDialogComponent,
    CatalogPopupComponent,
    CatalogDeletePopupComponent,
    CatalogDeleteDialogComponent,
    catalogRoute,
    catalogPopupRoute,
    CatalogResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...catalogRoute,
    ...catalogPopupRoute,
];

@NgModule({
    imports: [
        GatewaySharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CatalogComponent,
        CatalogDetailComponent,
        CatalogDialogComponent,
        CatalogDeleteDialogComponent,
        CatalogPopupComponent,
        CatalogDeletePopupComponent,
    ],
    entryComponents: [
        CatalogComponent,
        CatalogDialogComponent,
        CatalogPopupComponent,
        CatalogDeleteDialogComponent,
        CatalogDeletePopupComponent,
    ],
    providers: [
        CatalogService,
        CatalogPopupService,
        CatalogResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayCatalogModule {}
