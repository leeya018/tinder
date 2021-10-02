function generateTime(){
    let t = Math.random()*1000
    console.log(t)
    return t
}

let pos = 3
let counter = 0
let inter = setInterval(function () {
counter++
console.log(counter)
  if(Math.random()> 0.8){
pos = 1
  }else{
pos = 3
  }

    document.getElementsByClassName("button Lts($ls-s)")[pos].click()
}, generateTime())


setTimeout(function () {
    clearInterval(inter)
}, 1000 * 60 * 4)





setInterval(() => {
    console.log(generateTime())
    
}, 1000);
