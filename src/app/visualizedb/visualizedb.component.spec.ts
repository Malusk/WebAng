import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizedbComponent } from './visualizedb.component';

describe('VisualizedbComponent', () => {
  let component: VisualizedbComponent;
  let fixture: ComponentFixture<VisualizedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizedbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
