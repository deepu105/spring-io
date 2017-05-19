import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { GatewayTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { CatalogDetailComponent } from '../../../../../../main/webapp/app/entities/catalog/catalog-detail.component';
import { CatalogService } from '../../../../../../main/webapp/app/entities/catalog/catalog.service';
import { Catalog } from '../../../../../../main/webapp/app/entities/catalog/catalog.model';

describe('Component Tests', () => {

    describe('Catalog Management Detail Component', () => {
        let comp: CatalogDetailComponent;
        let fixture: ComponentFixture<CatalogDetailComponent>;
        let service: CatalogService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GatewayTestModule],
                declarations: [CatalogDetailComponent],
                providers: [
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    CatalogService,
                    EventManager
                ]
            }).overrideComponent(CatalogDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CatalogDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CatalogService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Catalog(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.catalog).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
