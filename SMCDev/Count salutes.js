function countSalutes( hallway ) {
  let [ right, sum ] = [ 0, 0 ]
  for ( const i of [ ...hallway ] ){

    if ( i === ">" ){
      right++
    }else if ( i === "<" ){
      sum += 2 * right
    }

  }
  return sum
}
