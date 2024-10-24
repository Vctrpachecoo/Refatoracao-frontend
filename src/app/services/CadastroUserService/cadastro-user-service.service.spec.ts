import { TestBed } from '@angular/core/testing';

import { CadastroUserService} from '../CadastroUserService/cadastro-user-service.service';

describe('CadastroUserServiceService', () => {
  let service: CadastroUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
