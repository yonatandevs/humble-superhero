import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from './superhero.service';
import { SuperheroResponseDto } from './dto/superhero-response.dto';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroService],
    }).compile();

    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addSuperhero', () => {
    it('should add a new superhero and return the superhero object', () => {
      const name = 'Superman';
      const superpower = 'Flight';
      const humilityScore = 8;

      const result: SuperheroResponseDto = service.addSuperhero(
        name,
        superpower,
        humilityScore,
      );

      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result.name).toBe(name);
      expect(result.superpower).toBe(superpower);
      expect(result.humilityScore).toBe(humilityScore);
    });
  });

  describe('getAllSuperheroes', () => {
    it('should return an array of superheroes sorted by humility score', () => {
      service.addSuperhero('Superman', 'Flight', 8);
      service.addSuperhero('Batman', 'Martial Arts', 9);
      service.addSuperhero('Wonder Woman', 'Strength', 10);

      const superheroes = service.getAllSuperheroes();

      expect(superheroes).toBeDefined();
      expect(superheroes).toHaveLength(3);
      expect(superheroes[0].name).toBe('Wonder Woman');
      expect(superheroes[1].name).toBe('Batman');
      expect(superheroes[2].name).toBe('Superman');
    });
  });
});
