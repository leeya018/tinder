
  function generateTime() {
    let t = Math.random() * 1000
    console.log(t)
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


  function badFit(arr) {
    let descEl = document.getElementsByClassName("BreakWord")[1]
    let descTxt = descEl ? descEl.textContent : ""
    for (let i = 0; i < arr.length; i++) {
      if (matchTxt(descTxt, arr[i])) {
        return true
      }
    }
    return false
  }



  function clickProfile() {
    if (!badFit(unwantedWords) && Math.random() <= 0.8) {
      pos = 3
    } else {
      pos = 1
    }
    document.getElementsByClassName("button Lts($ls-s)")[pos].click()
    return pos
  }


  function tinderRun() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let pos = clickProfile()
        // if (pos === 1) {
        //   reject("reject")
        // }
        resolve('resolved');
      }, generateTime());
    });
  }

  async function loop() {
    while (true) {
      await tinderRun()
    }

  }

  loop()

  // this is branch a 
//  this in new datta


// teinreintrsneits