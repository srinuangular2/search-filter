/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PgserService } from './pgser.service';

describe('PgserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PgserService]
    });
  });

  it('should ...', inject([PgserService], (service: PgserService) => {
    expect(service).toBeTruthy();
  }));
});
