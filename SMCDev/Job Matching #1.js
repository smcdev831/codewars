function match(candidate, job) {
  if (candidate.minSalary == null || job.maxSalary == null) {
    alert("error!");
  } else {
    return candidate.minSalary * 0.9 <= job.maxSalary;
  }
}
