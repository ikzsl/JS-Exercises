const optionalChaining = require('../optionalChaining');

const obj = {
    a: {
      b: {
        c: {
          d: 'Привет!',
        },
      },
    },
};
  
test('test1', () => {
    expect(optionalChaining(obj, 'a.b.c.d')).toBe('Привет!');
    expect(optionalChaining(obj, 'a.b.c.d.e')).toBeUndefined();
    expect(optionalChaining(obj, 'a.c.d')).toBeUndefined();
    expect(optionalChaining(obj, 'b.d.a')).toBeUndefined();
    expect(optionalChaining(obj, 'a.b.c')).toEqual({d: 'Привет!'});
});