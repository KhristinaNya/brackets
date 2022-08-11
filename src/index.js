module.exports = 
function check(str, bracketsConfig) {
  let arrValueBrackets = [];
  let sum = 0;
  let indexElement = -1;

  bracketsConfig.forEach((element, index) => {
    arrValueBrackets.push([10**index, (-1) * 10**index]);
  }); 

  str.split('').forEach((element)=>{
    bracketsConfig.forEach((item, index)=>{ 
      if (sum >= 0){
        indexElement = item.indexOf(element);
        sum += indexElement >=0 ? arrValueBrackets[index][indexElement ] : 0;
      }
      }
    );
  }
  );
  return sum === 0;
}
//const config1 =  [['(', ')'], ['|', '|']];
//console.log(check('[(])', config1));