// can check for shemale and more then one photo 
// mabey some hot ones 
let counter = 0
let run = true

let url_images_arr = []
function generateTime() {
  let t = Math.random() * 1000
  console.log(t)
  console.log("counter :" + counter)
  console.log(url_images_arr)
  return t
}

function matchTxt(descTxt, txt) {
  return descTxt.includes(txt)
}

let unwantedWords = [
  "לקשר רציני",
  "קשר רציני",
  "אמיתי",
  "בן זוג",
  "לא סטוץ",
  "לא מחפשת סטוצים",
  "לא לקשר קליל"
]

let wantedWords = [
  "טראנס",
  "shemale",
  "ladyboy",
  "trans",
  "transgender",
  "טראנסית",
  "טרנסית",
  "קוקסינל",
  "קוקסינלית",
  "טרנס",
  "קרוס",
  "קרוסית",
  "cross"
]


function goodFit(arr) {
  let descEl = document.getElementsByClassName("BreakWord")[1]
  let descTxt = descEl ? descEl.textContent : ""
  for (let i = 0; i < arr.length; i++) {
    if (matchTxt(descTxt, arr[i])) {
      return true
    }
  }
  return false
}

function play() {
  var beepsound = new Audio(
    'http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');
  beepsound.play();

}


function clickProfile() {

  counter ++
  // if ((!goodFit(unwantedWords) && Math.random() <= 0.8) || goodFit(wantedWords)) {
  if (goodFit(wantedWords)) {

    pos = 3
    console.log("good fit")
    play()
    alert("found")
    // url_images_arr.push(document.getElementsByClassName("Bdrs(8px) Bgz(cv) Bgp(c) StretchedBox")[0].style.backgroundImage )
  } else {
    pos = 1
    document.getElementsByClassName("button Lts($ls-s)")[pos].click()
  }
  return pos
}


function tinderRun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let pos = clickProfile()
      // if (pos === 1) {
      //   reject("reject")
      // }
      if (pos === 3) {
        run = false
      }

      resolve('resolved');
    }, generateTime());
  });
}

async function loop() {
  while (run ) {
    await tinderRun()
  }

}

loop()
