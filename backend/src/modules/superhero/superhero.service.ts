import { Injectable } from '@nestjs/common';

import { SuperheroResponseDto } from './dto/superhero-response.dto';

@Injectable()
export class SuperheroService {
  private superheroes: SuperheroResponseDto[] = [];
  private idCounter = 1;

  // Add a new superhero
  addSuperhero(
    name: string,
    superpower: string,
    humilityScore: number,
  ): SuperheroResponseDto {
    // we have to check if the data exist before adding it but for now...
    const newSuperhero: SuperheroResponseDto = {
      id: this.idCounter++,
      name,
      superpower,
      humilityScore,
    };
    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }

  // Get all superheroes sorted by humility score
  getAllSuperheroes(): SuperheroResponseDto[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
