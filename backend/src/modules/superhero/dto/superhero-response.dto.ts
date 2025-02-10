import { ApiProperty } from '@nestjs/swagger';

export class SuperheroResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the superhero',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The name of the superhero',
    example: 'Batman',
  })
  name: string;

  @ApiProperty({
    description: 'The superpower of the superhero',
    example: 'Intelligence',
  })
  superpower: string;

  @ApiProperty({
    description: 'The humility score of the superhero (1-10)',
    example: 9,
  })
  humilityScore: number;
}
