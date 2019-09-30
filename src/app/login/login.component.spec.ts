import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: AuthService;
  let spy: any;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needslogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();

  });

  it('canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needslogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});
