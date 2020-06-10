import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockArtistsMegalandComponent } from './block-artists-megaland.component';

describe('BlockArtistsMegalandComponent', () => {
  let component: BlockArtistsMegalandComponent;
  let fixture: ComponentFixture<BlockArtistsMegalandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockArtistsMegalandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockArtistsMegalandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
