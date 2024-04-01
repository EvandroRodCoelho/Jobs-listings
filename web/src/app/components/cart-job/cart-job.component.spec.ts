import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartJobComponent } from './cart-job.component';

describe('CartJobComponent', () => {
  let component: CartJobComponent;
  let fixture: ComponentFixture<CartJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
