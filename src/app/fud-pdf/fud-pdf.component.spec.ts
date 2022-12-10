import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FudPDFComponent } from './fud-pdf.component';

describe('FudPDFComponent', () => {
  let component: FudPDFComponent;
  let fixture: ComponentFixture<FudPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FudPDFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FudPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
