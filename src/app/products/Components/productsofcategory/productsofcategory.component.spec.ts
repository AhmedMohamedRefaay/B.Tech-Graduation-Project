import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsofcategoryComponent } from './productsofcategory.component';

describe('ProductsofcategoryComponent', () => {
  let component: ProductsofcategoryComponent;
  let fixture: ComponentFixture<ProductsofcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsofcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsofcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
