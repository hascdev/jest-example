const text = 'Hola Mundo!';
const fruits = [ 'manzana', 'pera', 'fruitlla' ];

test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

test('¿Tenemos una manzana?', () => {
    expect(fruits).toContain('manzana');
});

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
    expect(true).toBeTruthy();
});

const reverseStringCallback = (str, callback) => {
    callback(str.split("").reverse().join(""));
};

test('Probar un Callback', () => {
    reverseStringCallback('Hola', (str) => {
        expect(str).toBe('aloH');
    });
});

const reverseStringPromise = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'));
        }
        resolve(str.split("").reverse().join(""));
    });
}

test('Probar una Promesa', () => {
    return reverseStringPromise('Hola')
        .then(str => {
            expect(str).toBe('aloH');
        });
});

test('Probar async/await', async () => {
    const str = await reverseStringPromise('Hola');
    expect(str).toBe('aloH');
});

afterEach(() => console.log('Después de cada prueba'));
afterAll(() => console.log('Después de todas las pruebas'));

beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas la pruebas'));