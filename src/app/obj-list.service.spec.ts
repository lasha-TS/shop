import { TestBed } from '@angular/core/testing';

import { ObjListService } from './obj-list.service';

describe('ObjListService', () => {
  let service: ObjListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
