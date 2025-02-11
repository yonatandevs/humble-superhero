import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('SuperheroController (integration)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /superheroes - should add a new superhero', async () => {
    const superheroData = {
      name: 'Batman',
      superpower: 'Intelligence',
      humilityScore: 9,
    };

    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send(superheroData)
      .expect(201);

    expect(response.body).toEqual({
      id: expect.any(Number),
      ...superheroData,
    });
  });

  it('POST /superheroes - should return 400 for invalid humility score', async () => {
    const invalidSuperheroData = {
      name: 'Superman',
      superpower: 'Strength',
      humilityScore: 11, // Invalid score
    };

    await request(app.getHttpServer())
      .post('/superheroes')
      .send(invalidSuperheroData)
      .expect(400);
  });
});
