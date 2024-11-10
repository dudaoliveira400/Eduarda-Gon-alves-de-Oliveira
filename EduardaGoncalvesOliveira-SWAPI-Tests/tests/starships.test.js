
const axios = require('axios');

describe('SWAPI Starships Tests', () => {
    test('should return data for the Star Destroyer', async () => {
        const response = await axios.get('https://swapi.dev/api/starships/3/');
        expect(response.status).toBe(200);
        expect(response.data.name).toBe('Star Destroyer');
    });
});
