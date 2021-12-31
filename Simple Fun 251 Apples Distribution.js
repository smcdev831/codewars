function applesDistribution(apples, boxCapacity, maxResidue) {let count = 0;

  for (let i = 2; i <= boxCapacity; i++) {
    if (apples % i <= maxResidue) count++;
  }

  return count + 1;
}
