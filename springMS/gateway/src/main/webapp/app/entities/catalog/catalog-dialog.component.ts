import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService } from 'ng-jhipster';

import { Catalog } from './catalog.model';
import { CatalogPopupService } from './catalog-popup.service';
import { CatalogService } from './catalog.service';

@Component({
    selector: 'jhi-catalog-dialog',
    templateUrl: './catalog-dialog.component.html'
})
export class CatalogDialogComponent implements OnInit {

    catalog: Catalog;
    authorities: any[];
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private catalogService: CatalogService,
        private eventManager: EventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.catalog.id !== undefined) {
            this.subscribeToSaveResponse(
                this.catalogService.update(this.catalog));
        } else {
            this.subscribeToSaveResponse(
                this.catalogService.create(this.catalog));
        }
    }

    private subscribeToSaveResponse(result: Observable<Catalog>) {
        result.subscribe((res: Catalog) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Catalog) {
        this.eventManager.broadcast({ name: 'catalogListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-catalog-popup',
    template: ''
})
export class CatalogPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private catalogPopupService: CatalogPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.catalogPopupService
                    .open(CatalogDialogComponent, params['id']);
            } else {
                this.modalRef = this.catalogPopupService
                    .open(CatalogDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
