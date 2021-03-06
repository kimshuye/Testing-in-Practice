import { TestBed , async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';

import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        ProductDetailComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
