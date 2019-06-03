import { TestBed } from '@angular/core/testing';

import { HttpEmailService } from './http-email.service';

describe('HttpEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpEmailService = TestBed.get(HttpEmailService);
    expect(service).toBeTruthy();
  });
});
