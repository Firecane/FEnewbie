require('./scss/main.scss')

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min)
}

document.querySelector('#lotto-btn').addEventListener('click',function(){
  let lotto = new Set()

  for(;lotto.size < 6;){
      lotto.add(getRandomArbitrary(1,45))
  }
  
  document.querySelector('#lotto').innerHTML = '<div>'+Array.from(lotto).join('</div><div>')+'</div>'
})

