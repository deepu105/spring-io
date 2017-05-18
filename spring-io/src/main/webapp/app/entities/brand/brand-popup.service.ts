import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Brand } from './brand.model';
import { BrandService } from './brand.service';
@Injectable()
export class BrandPopupService {
    private isOpen = false;
    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private brandService: BrandService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.brandService.find(id).subscribe((brand) => {
                brand.startDate = this.datePipe
                    .transform(brand.startDate, 'yyyy-MM-ddThh:mm');
                this.brandModalRef(component, brand);
            });
        } else {
            return this.brandModalRef(component, new Brand());
        }
    }

    brandModalRef(component: Component, brand: Brand): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.brand = brand;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
