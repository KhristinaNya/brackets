module.exports = 
function check(str, bracketsConfig) {
  const newBracketsConfig = bracketsConfig.map(element => (element[0] + element[1]));

  let lengString = str.length;

  while (str.length) {
    newBracketsConfig.forEach(element => (str = str.replaceAll(element, '')));

    if (str.length === lengString ) {
      return false;
    }

    lengString  = str.length;
  }

  return true;
}
