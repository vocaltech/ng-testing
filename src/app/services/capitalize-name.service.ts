import { Injectable } from '@angular/core';
import { Person } from '../models/person.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalizeNameService {
  constructor() {}

  capitalizeName(person: Person): Person {
    return { ...person, name: person.name.toUpperCase() } 
  }
}
