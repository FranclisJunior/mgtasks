import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormLineComponent } from './my-form-line.component';

describe('MyFormLineComponent', () => {
  let component: MyFormLineComponent;
  let fixture: ComponentFixture<MyFormLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
