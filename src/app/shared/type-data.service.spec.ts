/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypeDataService } from './type-data.service';

describe('TypeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeDataService]
    });
  });

  it('should ...', inject([TypeDataService], (service: TypeDataService) => {
    expect(service).toBeTruthy();
  }));
});
