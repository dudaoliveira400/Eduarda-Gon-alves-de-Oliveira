
const axios = require('axios');

describe('SWAPI Nonexistent Character Test', () => {
    test('should return 404 for a nonexistent character', async () => {
        try {
            await axios.get('https://swapi.dev/api/people/9999/');
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });
});
