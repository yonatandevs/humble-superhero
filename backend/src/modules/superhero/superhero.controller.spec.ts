import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [SuperheroService],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should add a superhero', () => {
    const superhero = controller.addSuperhero({
      name: 'Batman',
      superpower: 'Intelligence',
      humilityScore: 9,
    });
    expect(superhero.name).toBe('Batman');
  });

  it('should get all superheroes sorted by humility score', () => {
    controller.addSuperhero({
      name: 'Superman',
      superpower: 'Strength',
      humilityScore: 8,
    });
    controller.addSuperhero({
      name: 'Spiderman',
      superpower: 'Agility',
      humilityScore: 10,
    });
    const superheroes = controller.getAllSuperheroes();
    expect(superheroes[0].name).toBe('Spiderman');
  });
});
