import { IsString, IsInt, Min, Max, IsNotEmpty } from 'class-validator';
import { HUMILITY_SCORE } from '../constants/humility-score.constant';
import { ApiProperty } from '@nestjs/swagger';

//we will use this to validate incoming API data
export class CreateSuperheroDto {
  @ApiProperty({
    example: 'Superman',
    description: 'The name of the superhero',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 'Flight', description: 'The main superpower' })
  @IsString()
  @IsNotEmpty()
  superpower!: string;

  @ApiProperty({
    example: 8,
    description: 'Humility score (1-10)',
    minimum: 1,
    maximum: 10,
  })
  @IsInt()
  @IsNotEmpty()
  @Min(HUMILITY_SCORE.MIN)
  @Max(HUMILITY_SCORE.MAX)
  humilityScore!: number;
}
