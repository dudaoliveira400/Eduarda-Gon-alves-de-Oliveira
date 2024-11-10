
const axios = require('axios');

describe('SWAPI Vehicles Tests', () => {
    test('should return data for the Sand Crawler', async () => {
        const response = await axios.get('https://swapi.dev/api/vehicles/4/');
        expect(response.status).toBe(200);
        expect(response.data.name).toBe('Sand Crawler');
    });
});
