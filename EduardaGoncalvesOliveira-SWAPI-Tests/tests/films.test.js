
const axios = require('axios');

describe('SWAPI Films Tests', () => {
    test('should return data for the film A New Hope', async () => {
        const response = await axios.get('https://swapi.dev/api/films/1/');
        expect(response.status).toBe(200);
        expect(response.data.title).toBe('A New Hope');
    });
});
