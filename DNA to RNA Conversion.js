function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    rna += dna[i].replace("T", "U");
  }
  return rna;
}

//refactoring
