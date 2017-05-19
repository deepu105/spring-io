import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { GatewayTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { SubCategoryDetailComponent } from '../../../../../../main/webapp/app/entities/sub-category/sub-category-detail.component';
import { SubCategoryService } from '../../../../../../main/webapp/app/entities/sub-category/sub-category.service';
import { SubCategory } from '../../../../../../main/webapp/app/entities/sub-category/sub-category.model';

describe('Component Tests', () => {

    describe('SubCategory Management Detail Component', () => {
        let comp: SubCategoryDetailComponent;
        let fixture: ComponentFixture<SubCategoryDetailComponent>;
        let service: SubCategoryService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GatewayTestModule],
                declarations: [SubCategoryDetailComponent],
                providers: [
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    SubCategoryService,
                    EventManager
                ]
            }).overrideComponent(SubCategoryDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SubCategoryDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SubCategoryService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new SubCategory(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.subCategory).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
