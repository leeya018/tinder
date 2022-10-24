// https://tinder.com/app/likes-you
const goToMatches = () => {
  document
    .getElementsByClassName(
      "focus-button-style Cur(p) Fw($bold) D(f) Fxd(r) Px(8px)"
    )[0]
    .click();
};
const openCard = () => {
  const match_cards = document.getElementsByClassName(
    "Bgc($c-ds-background-primary) recCard__img StretchedBox Bdrs(4px) Ov(h) H(100%) Pos(r)"
  );
  match_cards[0].click();
};

const sleep = async (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, time);
  });
};

const clickButton = async () => {
  let send_btn = document.getElementsByClassName(
    "button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Ell Bdrs(100px) Px(24px) Px(20px)--s Py(0) Mih(40px) Pos(r) Ov(h) C(#fff) Bg($c-pink):h::b Bg($c-pink):f::b Bg($c-pink):a::b Trsdu($fast) Trsp($background) Bg($g-ds-background-brand-gradient) button--primary-shadow StyledButton Bxsh($bxsh-btn) Fw($semibold) focus-button-style Mb(16px) As(fe)"
  )[0];
  send_btn.click();
};

const sendMsg = async () => {
  console.log("goToMatches();");
  goToMatches();
  await sleep(2000);
  console.log("openCard();");
  openCard();
  await sleep(3000);
  console.log("oclickButton();");
  clickButton();
};

const main = async () => {
  while (true) {
    await sendMsg();
  }
};

// main();
// ===============================================================================
const a = "hi baby , how are you?";
