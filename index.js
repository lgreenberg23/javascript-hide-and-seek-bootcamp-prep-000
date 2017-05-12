function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested div div div div')
  //so document.querySelector('some element / class / id')
  //will select the first target it finds

  //document.querySelectorAll('some element / class / id')
   //will select all nodes in that scope

//for (i=0;i<)
}

function increaseRankBy(n){

  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
return
}

function deepestChild(){
  let next = []
  var current = document.getElementById('grand-node')
//  let current = start

//div#grand-node

  while (next) {
//    next.push(current);
    if(current.children[0]){
      next.push(current);
      current=current.children[0];
    }else{
      break;
    }
  }
  return current
}
