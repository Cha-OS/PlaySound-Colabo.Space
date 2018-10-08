import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundResultComponent } from './sound-result.component';

describe('SoundResultComponent', () => {
  let component: SoundResultComponent;
  let fixture: ComponentFixture<SoundResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
