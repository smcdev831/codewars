function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
      return [];
  let positives = 0;
  let negatives = 0;
  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positives;
    else
      negatives += input[i];
  }
  return [positives, negatives];
}
