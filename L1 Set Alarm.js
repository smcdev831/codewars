function setAlarm(employed, vacation) {
  if (employed === true && vacation === false) {
    return true;
  } else {
    return false;
  }
}

//refactoring

function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}
