const cities = ['Santiago', 'Lima', 'Buenos Aires', 'Bogotá', 'Caracas'];

const randomCities = () => {
    const city = cities[Math.floor(Math.random() * cities.length)];
    return city;
};

module.exports = randomCities;