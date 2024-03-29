function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

//refactoring
function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  switch (true) {
    case average >= 90:
      return "A";
      break;
    case average >= 80:
      return "B";
      break;
    case average >= 70:
      return "C";
      break;
    case average >= 60:
      return "D";
      break;
    default:
      return "F";
      break;
  }
}

//refactoring
function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  return average >= 90
    ? "A"
    : average >= 80
    ? "B"
    : average >= 70
    ? "C"
    : average >= 60
    ? "D"
    : "F";
}
