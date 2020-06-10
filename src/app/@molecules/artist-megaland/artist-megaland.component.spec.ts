import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMegalandComponent } from './artist-megaland.component';

describe('ArtistMegalandComponent', () => {
  let component: ArtistMegalandComponent;
  let fixture: ComponentFixture<ArtistMegalandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMegalandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMegalandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
