import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessDetailsComponent } from './illness-details.component';

describe('IllnessDetailsComponent', () => {
  let component: IllnessDetailsComponent;
  let fixture: ComponentFixture<IllnessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IllnessDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IllnessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
