import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEditingComponent } from './character-editing.component';

describe('CharacterEditingComponent', () => {
  let component: CharacterEditingComponent;
  let fixture: ComponentFixture<CharacterEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
