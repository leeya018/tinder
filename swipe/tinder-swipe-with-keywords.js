let navButts =
  "Ai(c) D(f) Jc(sb) Pos(r) Maw(--recs-card-width)--m Mx(a) Pe(n) Py(12px) Py(16px)--ml Px(4px) Px(8px)--ml";
const but1 =
  document.getElementsByClassName(navButts)[0].children[1].children[0];
const but3 =
  document.getElementsByClassName(navButts)[0].children[3].children[0];
let notFound = true;

function generateTime() {
  let t = Math.random() * 1000;
  console.log(t);
  return t;
}
let unwantedWords = [];

let wantedWords = [
  "shemale",
  "ladyboy",
  "trans",
  "lady",
  "transgender",
  "not a lady",
];

function matchTxt(descTxt, txt) {
  //   console.log(descTxt);
  return descTxt.toLowerCase().includes(txt);
}

const showDescription = async () => {
  return new Promise((resolve, reject) => {
    const clButtonDescription =
      "P(0) Trsdu($normal) Sq(28px) Bdrs(50%) Cur(p) Ta(c) Scale(1.2):h Mb(12px)--ml Mb(8px) focus-button-style";

    const clButton = document.getElementsByClassName(clButtonDescription);
    if (clButton.length > 0) {
      clButton[0].click();
      setTimeout(() => {
        resolve();
      }, 500);
    } else {
      setTimeout(() => {
        resolve();
        // alert("wtf");
      }, 500);
    }
  });
};

async function goodFit(arr) {
  await showDescription();
  let descEl = document.getElementsByClassName("BreakWord")[0];
  let descTxt = descEl ? descEl.textContent : "";

  if (descTxt === "") return false;

  for (let i = 0; i < arr.length; i++) {
    if (matchTxt(descTxt, arr[i])) {
      return true;
    }
  }
  return false;
}

const clickProfile = async () => {
  return new Promise(async (resolve, reject) => {
    if ((await goodFit(wantedWords)) || Math.random() > 0.3) {
      document.getElementsByClassName("button Lts($ls-s)")[2].click();
      setTimeout(() => {
        // reject("ladyboy found");
        resolve();
      }, 300);
    } else {
      document.getElementsByClassName("button Lts($ls-s)")[0].click();
      setTimeout(() => {
        resolve();
      }, 300);
    }
  });
};

function tinderRun() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        await clickProfile();
      } catch (error) {
        // notFound = false
      }
      resolve("resolved");
    }, generateTime());
  });
}

async function loop() {
  while (notFound) {
    await tinderRun();
  }
}

loop();
