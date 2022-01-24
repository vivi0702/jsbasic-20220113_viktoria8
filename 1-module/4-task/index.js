function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('xxx') || lowerStr.includes('1xbet');   
}

alert( checkSpam('1XbeT now') ) === true ;
alert( checkSpam('free xxxxx') ) === true ;
alert( checkSpam('innocent rabbit') ) === false ;
  

