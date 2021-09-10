function restaurant(a,b,t){
  let deny = 0, semi = 0;
  for(let n of t){
    if(n == 2){
      if(b) b--;
      else deny += 2;
    }
    else {
      if(a) a--;
      else if (b) {b--; semi++;}
      else if (semi) semi--;
      else deny++
    }
  }
  return deny;
}
