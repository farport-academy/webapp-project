import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNestedComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeNestedComponent;
  let fixture: ComponentFixture<HomeNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNestedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
