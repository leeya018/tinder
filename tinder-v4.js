// can check for shemale and more then one photo 
// mabey some hot ones 
let counter = 0
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
    "טרנס"
    


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



  function clickProfile() {
    // if ((!goodFit(unwantedWords) && Math.random() <= 0.8) || goodFit(wantedWords)) {
    if ( goodFit(wantedWords)) {

      pos = 3 
      counter ++
      url_images_arr.push(document.getElementsByClassName("Bdrs(8px) Bgz(cv) Bgp(c) StretchedBox")[0].style.backgroundImage )
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
// teinreintrsneits
// teinreintrsneits



// this for the clicking to the sides of the pic
4
// document.getElementsByClassName("bullet D(ib) Va(m) Cnt($blank)::a D(b)::a Cur(p) H(4px)::a W(100%)::a Py(4px) Px(2px) W(100%) Bdrs(100px)::a Bgc($c-bg-black)::a Op(.2) focus-background-style")[0].click()

// document.getElementsByClassName("bullet D(ib) Va(m) Cnt($blank)::a D(b)::a Cur(p) bullet--active H(4px)::a W(100%)::a Py(4px) Px(2px) W(100%) Bdrs(100px)::a Bgc(#fff)::a focus-background-style


// bullet D(ib) Va(m) Cnt($blank)::a D(b)::a Cur(p) H(4px)::a W(100%)::a Py(4px) Px(2px) W(100%) Bdrs(100px)::a Bgc($c-bg-black)::a Op(.2) focus-background-style


// new line here 
//trhtsrnhnetrs