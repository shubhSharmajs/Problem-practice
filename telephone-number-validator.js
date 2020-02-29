function telephoneCheck(str) {
  let str1 = str.replace(/\s/g, '');
  let numStr = str1.split('');
  let nanCount = 0;
  let isNumberCount = 0;
  let isValidNumber = true;
  let openBracket = false;
  for(let i =0; i < numStr.length; i++){
   if(isNaN(numStr[i])) {
     if(numStr[i] === '(') {
       openBracket = true;
       if(numStr[i+4] !== ')'){
         return false;
       }
     }
     if(numStr[i] === ')' && openBracket === false){
       return false
     }
      nanCount++;
    }
    else{
      isNumberCount++
      nanCount = 0;
    }
    if(nanCount >= 2) {
      return false;
    }
  }
  if(isNumberCount <= 9 || isNumberCount > 11 ) {
    return false;
  }
  else if (isNumberCount === 11) {
    if(numStr[0] !== '1') {
      return false
    } 
  }
  return isValidNumber;
}

telephoneCheck("555-555-5555");
