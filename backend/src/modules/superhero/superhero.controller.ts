import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { SuperheroResponseDto } from './dto/superhero-response.dto';

@ApiTags('Superheroes') // Grouping in Swagger UI
@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  @ApiOperation({
    summary: 'Add a new superhero',
    description: 'Adds a new superhero.',
  })
  @ApiResponse({
    status: 201,
    description: 'Superhero successfully added.',
    type: SuperheroResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiBody({
    type: CreateSuperheroDto,
    description: 'Payload to create a new superhero',
    examples: {
      example1: {
        value: {
          name: 'Batman',
          superpower: 'Intelligence',
          humilityScore: 9,
        },
        summary: 'Example payload for adding a superhero',
      },
    },
  })
  addSuperhero(
    @Body() createSuperheroDto: CreateSuperheroDto,
  ): SuperheroResponseDto {
    return this.superheroService.addSuperhero(
      createSuperheroDto.name,
      createSuperheroDto.superpower,
      createSuperheroDto.humilityScore,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Get all superheroes',
    description:
      'Returns a list of all superheroes sorted by humility score in descending order.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of superheroes retrieved successfully.',
    type: [SuperheroResponseDto],
  })
  getAllSuperheroes(): SuperheroResponseDto[] {
    return this.superheroService.getAllSuperheroes();
  }
}
