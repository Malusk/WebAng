import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFSubmitComponent } from './pdfsubmit.component';

describe('PDFSubmitComponent', () => {
  let component: PDFSubmitComponent;
  let fixture: ComponentFixture<PDFSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDFSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDFSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
