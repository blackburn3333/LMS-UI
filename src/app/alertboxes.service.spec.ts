import { TestBed } from '@angular/core/testing';

import { AlertboxesService } from './alertboxes.service';

describe('AlertboxesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertboxesService = TestBed.get(AlertboxesService);
    expect(service).toBeTruthy();
  });
});
