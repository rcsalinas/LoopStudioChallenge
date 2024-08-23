import request from 'supertest';
import app from '../../index';
import { connect, close } from '../../config/db';
import Country from '../../models/Country';

beforeAll(async () => {
  await connect();

  await Country.create([
    {
      name: 'Country A',
      officialName: 'Country A Official',
      capital: 'Capital A',
      region: 'Region A',
      subregion: 'Subregion A',
      alpha2Code: 'CA',
      votes: 2,
    },
    {
      name: 'Country B',
      officialName: 'Country B Official',
      capital: 'Capital B',
      region: 'Region B',
      subregion: 'Subregion B',
      alpha2Code: 'CB',
      votes: 1,
    },
  ]);
});

afterAll(async () => {
  await Country.deleteMany({});
  await close();
});

describe('GET /api/countries', () => {
  it('should retrieve the top 10 countries sorted by votes', async () => {
    const response = await request(app).get('/api/countries/top').expect(200);

    expect(response.body).toBeDefined();
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    expect(response.body[0]).toHaveProperty('name', 'Country A');
    expect(response.body[0]).toHaveProperty('votes', 2);
    expect(response.body[1]).toHaveProperty('name', 'Country B');
    expect(response.body[1]).toHaveProperty('votes', 1);
  });

  it('should search for countries by name, capital, region, and subregion', async () => {
    // Search by name
    let response = await request(app)
      .get('/api/countries/search?query=Country A')
      .expect(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('name', 'Country A');

    // Search by capital
    response = await request(app)
      .get('/api/countries/search?query=Capital B')
      .expect(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('name', 'Country B');

    // Search by region
    response = await request(app)
      .get('/api/countries/search?query=Region A')
      .expect(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('name', 'Country A');

    // Search by subregion
    response = await request(app)
      .get('/api/countries/search?query=Subregion B')
      .expect(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('name', 'Country B');
  });
});

describe('GET /api/countries error scenarios', () => {
  it('should handle invalid search query', async () => {
    const response = await request(app)
      .get('/api/countries/search?query=NonExistentCountry')
      .expect(200);

    expect(response.body.length).toBe(0);
  });

  it('should handle unexpected errors in search', async () => {
    jest.spyOn(Country, 'find').mockImplementationOnce(() => {
      throw new Error('Unexpected Error');
    });

    const response = await request(app)
      .get('/api/countries/search?query=something')
      .expect(500);

    expect(response.body.message).toBe('Server Error');
  });

  it('should handle unexpected errors in top', async () => {
    jest.spyOn(Country, 'find').mockImplementationOnce(() => {
      throw new Error('Unexpected Error');
    });

    const response = await request(app).get('/api/countries/top').expect(500);

    expect(response.body.message).toBe('Server Error');
  });
});
