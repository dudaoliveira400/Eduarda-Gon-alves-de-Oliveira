
const axios = require('axios');

describe('SWAPI Nonexistent Routes Tests', () => {
    test('should return 404 for nonexistent route', async () => {
        try {
            await axios.get('https://swapi.dev/api/heroes/');
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });
});
