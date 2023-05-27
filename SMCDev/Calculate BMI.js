function bmi(weight, height) {
  var bmicalc = (weight / (height*height))
  if (bmicalc <= 18.5)
    return "Underweight";
  else if (bmicalc <= 25.0)
    return "Normal";
  else if (bmicalc <= 30.0)
    return "Overweight";
  else
    return "Obese";
}
