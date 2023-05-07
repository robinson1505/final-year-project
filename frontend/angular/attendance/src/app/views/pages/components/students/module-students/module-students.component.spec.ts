import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleStudentsComponent } from './module-students.component';

describe('ModuleStudentsComponent', () => {
  let component: ModuleStudentsComponent;
  let fixture: ComponentFixture<ModuleStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
