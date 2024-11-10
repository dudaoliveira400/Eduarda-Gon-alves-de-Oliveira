
const axios = require('axios');

describe('SWAPI People Tests', () => {
    test('should return data for Luke Skywalker', async () => {
        const response = await axios.get('https://swapi.dev/api/people/1/');
        expect(response.status).toBe(200);
        expect(response.data.name).toBe('Luke Skywalker');
    });
});
