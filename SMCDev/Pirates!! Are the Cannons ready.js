const cannonsReady = (gunners) => {
  for(name in gunners)
    if(gunners[name] === 'nay')
      return 'Shiver me timbers!'
  return 'Fire!'
}
