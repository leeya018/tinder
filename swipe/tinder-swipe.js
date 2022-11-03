const cl3 =
  "button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a";
const but3 = document.getElementsByClassName(cl3)[0];

const cl1 =
  "button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-nope):a";
const but1 = document.getElementsByClassName(cl1)[0];

function generateTime() {
  let t = Math.random() * 1000;
  console.log(t);
  return t;
}

const clickProfile = async () => {
  return new Promise(async (resolve, reject) => {
    if (Math.random() > 0.3) {
      but3.click();
    } else {
      but1.click();
    }
    resolve();
  });
};

function tinderRun() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        clickProfile();
      } catch (error) {
        // notFound = false
      }
      resolve("resolved");
    }, generateTime());
  });
}

async function loop() {
  while (true) {
    await tinderRun();
  }
}

loop();
