import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavconnectComponent } from './navconnect.component';

describe('NavconnectComponent', () => {
  let component: NavconnectComponent;
  let fixture: ComponentFixture<NavconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavconnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
