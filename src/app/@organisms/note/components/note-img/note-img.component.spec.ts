import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteImgComponent } from './note-img.component';

describe('NoteImgComponent', () => {
  let component: NoteImgComponent;
  let fixture: ComponentFixture<NoteImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
