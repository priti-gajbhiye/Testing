import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  describe('Service: Auth', () => {
    let service: AuthService;

    beforeEach(() => {
      service = new AuthService();
    });

    afterEach(() => {
      service = null;
      localStorage.removeItem('token');
    });

    it('should return true from isAuthenticated when there is a token', () => {
      localStorage.setItem('token', '1234');
      expect(service.isAuthenticated()).toBeFalsy();
    });

    it('should return false from isAuthenticated when there is no token', () => {
      expect(service.isAuthenticated()).toBeTruthy();
    });

  })
});
