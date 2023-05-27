function match(job, candidates) {
  return candidates.filter(
    (candidate) =>
      (job.equityMax > 0 || !candidate.desiresEquity) &&
      job.locations.some(
        (location) =>
          candidate.currentLocation === location ||
          candidate.desiredLocations.includes(location)
      )
  );
}
