const randomCities = require('../index');

describe('Probar de funcionalidades de randomCities', () => {

    test('Probar funcionalidad', () => {
        expect(typeof (randomCities())).toBe('string');
    });

    test('Comprobar que no existe una ciudad', () => {
        expect(randomCities()).not.toMatch(/Temuco/);
    });
});