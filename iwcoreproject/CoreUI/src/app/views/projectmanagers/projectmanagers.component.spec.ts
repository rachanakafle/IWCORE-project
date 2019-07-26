import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagersComponent } from './projectmanagers.component';

describe('ProjectmanagersComponent', () => {
  let component: ProjectmanagersComponent;
  let fixture: ComponentFixture<ProjectmanagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmanagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmanagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
