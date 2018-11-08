function testbirthday(birthday){
  var regex = /^[012]((\d{2})(0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(\d{2})(0[469]|11)(0[1-9]|[12]\d|30)|(\d{2})(02)(0[1-9]|[12]\d))$/;  
  return regex.test(birthday);
}

console.log(testbirthday('0810823'));