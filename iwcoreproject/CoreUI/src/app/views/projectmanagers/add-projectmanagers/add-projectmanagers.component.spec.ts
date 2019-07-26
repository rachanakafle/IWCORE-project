import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectmanagersComponent } from './add-projectmanagers.component';

describe('AddProjectmanagersComponent', () => {
  let component: AddProjectmanagersComponent;
  let fixture: ComponentFixture<AddProjectmanagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectmanagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectmanagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
