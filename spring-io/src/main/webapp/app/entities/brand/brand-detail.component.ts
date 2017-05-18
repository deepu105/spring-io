import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager  } from 'ng-jhipster';

import { Brand } from './brand.model';
import { BrandService } from './brand.service';

@Component({
    selector: 'jhi-brand-detail',
    templateUrl: './brand-detail.component.html'
})
export class BrandDetailComponent implements OnInit, OnDestroy {

    brand: Brand;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: EventManager,
        private brandService: BrandService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInBrands();
    }

    load(id) {
        this.brandService.find(id).subscribe((brand) => {
            this.brand = brand;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInBrands() {
        this.eventSubscriber = this.eventManager.subscribe(
            'brandListModification',
            (response) => this.load(this.brand.id)
        );
    }
}
