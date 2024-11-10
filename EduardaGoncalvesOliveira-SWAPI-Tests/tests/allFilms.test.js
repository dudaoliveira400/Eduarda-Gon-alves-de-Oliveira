
const axios = require('axios');

describe('SWAPI All Films Test', () => {
    test('should return a list of all films', async () => {
        const response = await axios.get('https://swapi.dev/api/films/');
        expect(response.status).toBe(200);
        expect(response.data.count).toBeGreaterThan(0); 
    });
});
