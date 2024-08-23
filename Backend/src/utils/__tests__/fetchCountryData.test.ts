import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchCountryData } from '../fetchCountryData';

const mock = new MockAdapter(axios);

describe('fetchCountryData', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch and return country data successfully', async () => {
    const alpha2Code = 'HN';
    const mockData = {
      name: 'Honduras',
      capital: 'Tegucigalpa',
      region: 'Americas',
      subregion: 'Central America',
    };

    mock
      .onGet(`https://restcountries.com/v3.1/alpha/${alpha2Code}`)
      .reply(200, [mockData]);

    const data = await fetchCountryData(alpha2Code);
    expect(data).toEqual(mockData);
  });

  it('should handle errors and throw an error', async () => {
    const alpha2Code = 'HN';
    mock.onGet(`https://restcountries.com/v3.1/alpha/${alpha2Code}`).reply(500);

    await expect(fetchCountryData(alpha2Code)).rejects.toThrow(
      'Unable to fetch country data'
    );
  });
});
