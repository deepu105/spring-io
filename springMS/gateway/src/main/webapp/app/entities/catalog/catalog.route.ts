import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { CatalogComponent } from './catalog.component';
import { CatalogDetailComponent } from './catalog-detail.component';
import { CatalogPopupComponent } from './catalog-dialog.component';
import { CatalogDeletePopupComponent } from './catalog-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class CatalogResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: PaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const catalogRoute: Routes = [
    {
        path: 'catalog',
        component: CatalogComponent,
        resolve: {
            'pagingParams': CatalogResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.catalog.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'catalog/:id',
        component: CatalogDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.catalog.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const catalogPopupRoute: Routes = [
    {
        path: 'catalog-new',
        component: CatalogPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.catalog.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'catalog/:id/edit',
        component: CatalogPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.catalog.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'catalog/:id/delete',
        component: CatalogDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.catalog.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
