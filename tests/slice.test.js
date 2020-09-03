const descendingOrder = require('../slice');

test('descendingOrder', () => {
    expect(descendingOrder(42145)).toBe(54421);
});

test('descendingOrder', () => {
    expect(descendingOrder(145263)).toBe(654321);
});

test('descendingOrder', () => {
    expect(descendingOrder(123456789)).toBe(987654321);
});