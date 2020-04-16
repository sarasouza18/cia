import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFailComponent } from './details-fail.component';

describe('DetailsFailComponent', () => {
  let component: DetailsFailComponent;
  let fixture: ComponentFixture<DetailsFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
