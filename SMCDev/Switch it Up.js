function switchItUp(number) {
  switch (true) {
    case number === 0:
      return "Zero";
      break;
    case number === 1:
      return "One";
      break;
    case number === 2:
      return "Two";
      break;
    case number === 3:
      return "Three";
      break;
    case number === 4:
      return "Four";
      break;
    case number === 5:
      return "Five";
      break;
    case number === 6:
      return "Six";
      break;
    case number === 7:
      return "Seven";
      break;
    case number === 8:
      return "Eight";
      break;
    case number === 9:
      return "Nine";
      break;
    default:
      return "This isn't a number between 0 and 9";
      break;
  }
}

//refactoring
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
    default:
      return "This isn't a number between 0 and 9";
      break;
  }
}

//refactoring
function switchItUp(number) {
  return number === 0
    ? "Zero"
    : number === 1
    ? "One"
    : number === 2
    ? "Two"
    : number === 3
    ? "Three"
    : number === 4
    ? "Four"
    : number === 5
    ? "Five"
    : number === 6
    ? "Six"
    : number === 7
    ? "Seven"
    : number === 8
    ? "Eight"
    : number === 9
    ? "Nine"
    : "This is not a number between 0 and 9";
}

//refactoring
function switchItUp(number) {
  return [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][number];
}
