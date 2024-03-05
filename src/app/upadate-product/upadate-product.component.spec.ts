import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateProductComponent } from './upadate-product.component';

describe('UpadateProductComponent', () => {
  let component: UpadateProductComponent;
  let fixture: ComponentFixture<UpadateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
