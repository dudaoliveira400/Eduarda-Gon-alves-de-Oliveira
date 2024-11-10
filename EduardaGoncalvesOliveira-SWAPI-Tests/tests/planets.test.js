
const axios = require('axios');

describe('SWAPI Planets Tests', () => {
    test('should return data for planet Tatooine', async () => {
        const response = await axios.get('https://swapi.dev/api/planets/1/');
        expect(response.status).toBe(200);
        expect(response.data.name).toBe('Tatooine');
    });
});
