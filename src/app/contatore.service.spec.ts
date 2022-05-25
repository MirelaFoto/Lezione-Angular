import { TestBed } from '@angular/core/testing';

import { ContatoreService } from './contatore/services/contatore.service';

describe('ContatoreService', () => {
  let service: ContatoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
