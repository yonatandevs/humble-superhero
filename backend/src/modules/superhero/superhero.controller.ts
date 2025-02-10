import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroService.addSuperhero(
      createSuperheroDto.name,
      createSuperheroDto.superpower,
      createSuperheroDto.humilityScore,
    );
  }

  @Get()
  getAllSuperheroes() {
    return this.superheroService.getAllSuperheroes();
  }
}
