import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCharacterPage } from './edit-character.page';

describe('EditCharacterPage', () => {
  let component: EditCharacterPage;
  let fixture: ComponentFixture<EditCharacterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
