import { TestBed } from '@angular/core/testing';

import { CadastroUserServiceService } from './cadastro-user-service.service';

describe('CadastroUserServiceService', () => {
  let service: CadastroUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
