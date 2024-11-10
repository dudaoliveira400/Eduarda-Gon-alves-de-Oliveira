
const axios = require('axios');

describe('SWAPI Species Tests', () => {
    test('should return data for the Wookiee species', async () => {
        const response = await axios.get('https://swapi.dev/api/species/3/');
        expect(response.status).toBe(200);
        expect(response.data.name).toBe('Wookie');

    });
});
