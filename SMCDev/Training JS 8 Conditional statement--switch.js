function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      days = 31;
      break;
    case 3:
      days = 31;
      break;
    case 5:
      days = 31;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 10:
      days = 31;
      break;
    case 12:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
  }
  return days;
}

//refactoring
function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
