/**
 * Задача - посчитать сумму values в данном дереве
 */

function sum(obj) {
    let summer = 0;
    if (!Array.isArray(obj.next)) {
      summer += obj.value;
      return summer;
    }
    // Array.isArray([])//true
    obj.next.forEach((el) => {
        summer += sum(el);
    })
    return summer;
  }
  
  const obj = {
    value: 1,
    next: [
      {
        value: 2,
        next: null
      },
      {
        value: 3,
        next: null
      },
      {
        value: 22,
        next: null
      },
      {
        value: 10,
        next: null
      },
      {
        value: 2,
        next: [
          {
        value: 3,
        next: null
      },
      {
        value: 22,
        next: [
          {
        value: 10,
        next: null
      },
        ]
      },
      {
        value: 10,
        next: null
      },
        ]
      },
  
    ]
  }
  sum(obj);