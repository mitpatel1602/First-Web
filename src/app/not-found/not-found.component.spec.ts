import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOTFOUNDComponent } from './not-found.component';

describe('NOTFOUNDComponent', () => {
  let component: NOTFOUNDComponent;
  let fixture: ComponentFixture<NOTFOUNDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NOTFOUNDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NOTFOUNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
