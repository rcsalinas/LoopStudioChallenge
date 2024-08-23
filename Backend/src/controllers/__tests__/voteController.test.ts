import request from 'supertest';
import app from '../../index'; // Your Express app
import { connect, close } from '../../config/db';
import Vote from '../../models/Vote';
import Country from '../../models/Country';

beforeAll(async () => {
  await connect();

  // Seed the country data
  await Country.create({
    name: 'Test Country',
    officialName: 'Test Country Official',
    capital: 'Test Capital',
    region: 'Test Region',
    subregion: 'Test Subregion',
    alpha2Code: 'TC',
  });
});

afterEach(async () => {
  // Clear all collections after each test
  await Vote.deleteMany({});
  await Country.deleteMany({});
});

afterAll(async () => {
  await close();
});

describe('POST /api/votes', () => {
  it('should create a new vote', async () => {
    const response = await request(app)
      .post('/api/votes')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        countryCode: 'TC',
      })
      .expect(201);

    expect(response.body.message).toBe('Your vote was succesfully submitted');
    expect(response.body.country.name).toBe('Test Country');
  });

  it('should not allow duplicate votes by the same email', async () => {
    await request(app)
      .post('/api/votes')
      .send({
        name: 'Jane Doe',
        email: 'jane@example.com',
        countryCode: 'TC',
      })
      .expect(201);

    const response = await request(app)
      .post('/api/votes')
      .send({
        name: 'Jane Doe',
        email: 'jane@example.com',
        countryCode: 'TC',
      })
      .expect(400);

    expect(response.body.message).toBe('You have already voted');
  });
});
