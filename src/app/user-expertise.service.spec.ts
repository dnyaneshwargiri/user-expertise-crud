import { TestBed } from '@angular/core/testing';

import { UserExpertiseService } from './user-expertise.service';

describe('UserExpertiseService', () => {
  let service: UserExpertiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserExpertiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
