import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeCodeComponentComponent } from './fe-code-component.component';

describe('FeCodeComponentComponent', () => {
  let component: FeCodeComponentComponent;
  let fixture: ComponentFixture<FeCodeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeCodeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeCodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
