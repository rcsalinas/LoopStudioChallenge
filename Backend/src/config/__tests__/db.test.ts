import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connect, close } from '../db';

dotenv.config();

describe('Database Connection', () => {
  beforeEach(async () => {
    process.env.NODE_ENV = 'test';
    await connect();
  });

  afterEach(async () => {
    await close();
  });

  it('should connect to in-memory MongoDB for testing', async () => {
    expect(mongoose.connection.readyState).toBe(1);
  });

  it('should disconnect and stop in-memory server', async () => {
    await close();
    expect(mongoose.connection.readyState).toBe(0);
  });
});
