const cadenaInversa = require('./cadena');

test('Invierte la cadena "hola" a "aloh"', () => {
    expect(cadenaInversa('hola')).toBe('aloh');
});

test('Invierte la cadena vacía a cadena vacía', () => {
    expect(cadenaInversa('')).toBe('');
});

test('Invierte la cadena con espacios "abc def" a "fed cba"', () => {
    expect(cadenaInversa('abc def')).toBe('fed cba');
});