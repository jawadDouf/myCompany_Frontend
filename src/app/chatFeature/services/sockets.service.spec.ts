import { TestBed } from '@angular/core/testing';

import { SocketsService } from '../../services./chatFeature/services/sockets.service';

describe('SocketsService', () => {
  let service: SocketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
