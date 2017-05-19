import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager  } from 'ng-jhipster';

import { Catalog } from './catalog.model';
import { CatalogService } from './catalog.service';

@Component({
    selector: 'jhi-catalog-detail',
    templateUrl: './catalog-detail.component.html'
})
export class CatalogDetailComponent implements OnInit, OnDestroy {

    catalog: Catalog;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: EventManager,
        private catalogService: CatalogService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInCatalogs();
    }

    load(id) {
        this.catalogService.find(id).subscribe((catalog) => {
            this.catalog = catalog;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInCatalogs() {
        this.eventSubscriber = this.eventManager.subscribe(
            'catalogListModification',
            (response) => this.load(this.catalog.id)
        );
    }
}
