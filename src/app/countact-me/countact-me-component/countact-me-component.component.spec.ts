import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountactMeComponentComponent } from './countact-me-component.component';

describe('CountactMeComponentComponent', () => {
  let component: CountactMeComponentComponent;
  let fixture: ComponentFixture<CountactMeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountactMeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountactMeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
