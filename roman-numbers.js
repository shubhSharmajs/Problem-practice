function romanNumber(num) {
  
    let numStr = num.toString();
    let splitedNum = numStr.split('');
    let splitedNumLength = splitedNum.length;
    let result = [];
    let j = splitedNumLength - 1;
    console.log(splitedNumLength)
    
    const fullObj= {
      0: {
        '0':'',
        '1':'I',
        '2':'II',
        '3':'III',
        '4':'IV',
        '5': 'V',
        '6':'VI',
        '7': 'VII',
        '8':'VIII',
        '9':'IX',
      },
      1: {
        '0':'',
        '1':'X',
        '2':'XX',
        '3':'XXX',
        '4':'XL',
        '5': 'L',
        '6':'LX',
        '7': 'LXX',
        '8':'LXXX',
        '9':'XC',
      },
      2: {
        '0':'',
       '1':'C',
        '2':'CC',
        '3':'CCC',
        '4':'CD',
        '5': 'D',
        '6':'DC',
        '7': 'DCC',
        '8':'DCCC',
        '9':'CM',
    },
        3: {
          '0':'',
       '1':'M',
        '2':'MM',
        '3':'MMM'
    }
    }
    
    splitedNum.forEach((res) => {
       result.push(fullObj[j][res]);
      j--;
    })
    
    console.log('results', result.join(""));
    }
    
    romanNumber(847);
    
    
    
    