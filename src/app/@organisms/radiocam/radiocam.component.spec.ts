import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiocamComponent } from './radiocam.component';

describe('RadiocamComponent', () => {
  let component: RadiocamComponent;
  let fixture: ComponentFixture<RadiocamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiocamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiocamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
