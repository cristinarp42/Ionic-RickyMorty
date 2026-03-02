import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddCharacterComponent } from './add-character.component';

describe('AddCharacterComponent', () => {
  let component: AddCharacterComponent;
  let fixture: ComponentFixture<AddCharacterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AddCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
