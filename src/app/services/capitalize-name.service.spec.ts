import { TestBed } from '@angular/core/testing';

import { CapitalizeNameService } from './capitalize-name.service';
import { Person } from '../models/person.interface';

describe('CapitalizeNameService', () => {
  let service: CapitalizeNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapitalizeNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should capitalize the name in the object', () => {
    // given
    const person: Person = {
      name: 'John Doe',
      age: 29
    }

    // when
    const personCapitalized = service.capitalizeName(person);

    // then
    expect(personCapitalized.name).toBe('JOHN DOE')
  })
});
