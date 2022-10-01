import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestingReactiveFormsComponent } from './nesting-reactive-forms.component';

describe('NestingReactiveFormsComponent', () => {
  let component: NestingReactiveFormsComponent;
  let fixture: ComponentFixture<NestingReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestingReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestingReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
