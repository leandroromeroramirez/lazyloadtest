import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNoteComponent } from './section-note.component';

describe('SectionNoteComponent', () => {
  let component: SectionNoteComponent;
  let fixture: ComponentFixture<SectionNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
