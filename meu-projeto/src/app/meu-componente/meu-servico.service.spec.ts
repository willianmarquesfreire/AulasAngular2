/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeuServicoService } from './meu-servico.service';

describe('MeuServicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeuServicoService]
    });
  });

  it('should ...', inject([MeuServicoService], (service: MeuServicoService) => {
    expect(service).toBeTruthy();
  }));
});
