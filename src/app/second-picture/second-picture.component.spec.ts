import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPictureComponent } from './second-picture.component';

describe('SecondPictureComponent', () => {
  let component: SecondPictureComponent;
  let fixture: ComponentFixture<SecondPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
