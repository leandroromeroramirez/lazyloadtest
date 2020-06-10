import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStreamingMegalandComponent } from './block-streaming-megaland.component';

describe('BlockStreamingMegalandComponent', () => {
  let component: BlockStreamingMegalandComponent;
  let fixture: ComponentFixture<BlockStreamingMegalandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockStreamingMegalandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockStreamingMegalandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
