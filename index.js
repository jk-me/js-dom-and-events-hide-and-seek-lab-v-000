function getFirstSelector(sel){
  return document.querySelector(sel)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let node = document.querySelector('div#grand-node')
  function iter(next){
    if (next.querySelector(':first-child') !== null){
      return iter(next.querySelector(':first-child'))
    }
    else{
      return next
    }
  }
  return iter(node)
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}
