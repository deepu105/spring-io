import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from 'ng-jhipster';

import { Catalog } from './catalog.model';
import { CatalogPopupService } from './catalog-popup.service';
import { CatalogService } from './catalog.service';

@Component({
    selector: 'jhi-catalog-delete-dialog',
    templateUrl: './catalog-delete-dialog.component.html'
})
export class CatalogDeleteDialogComponent {

    catalog: Catalog;

    constructor(
        private catalogService: CatalogService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.catalogService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'catalogListModification',
                content: 'Deleted an catalog'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-catalog-delete-popup',
    template: ''
})
export class CatalogDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private catalogPopupService: CatalogPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.catalogPopupService
                .open(CatalogDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
