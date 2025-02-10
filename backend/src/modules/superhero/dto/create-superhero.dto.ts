import { IsString, IsInt, Min, Max, IsNotEmpty } from 'class-validator';
import { HUMILITY_SCORE } from '../constants/humility-score.constant';

//we will use this to validate incoming API data
export class CreateSuperheroDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  superpower!: string;

  @IsInt()
  @IsNotEmpty()
  @Min(HUMILITY_SCORE.MIN)
  @Max(HUMILITY_SCORE.MAX)
  humilityScore!: number;
}
