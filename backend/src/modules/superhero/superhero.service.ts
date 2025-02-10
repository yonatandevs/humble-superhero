import { Injectable } from '@nestjs/common';
import { Superhero } from './interfaces/superhero.interface';

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];
  private idCounter = 1;

  // Add a new superhero
  addSuperhero(
    name: string,
    superpower: string,
    humilityScore: number,
  ): Superhero {
    const newSuperhero: Superhero = {
      id: this.idCounter++,
      name,
      superpower,
      humilityScore,
    };
    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }

  // Get all superheroes sorted by humility score
  getAllSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
