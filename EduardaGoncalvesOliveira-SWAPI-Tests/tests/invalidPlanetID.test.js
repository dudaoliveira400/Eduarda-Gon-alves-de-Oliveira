
const axios = require('axios');

describe('SWAPI Invalid Planet ID Tests', () => {
    test('should return 404 for an invalid planet ID', async () => {
        try {
            await axios.get('https://swapi.dev/api/planets/9999/');
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });
});
