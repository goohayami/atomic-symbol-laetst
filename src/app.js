"use strict";
/// ここからランダムの配列を生成///
const arry1 = [];
const arry2 = [];
let n = questions.length;
const makeArry = () => {
  for (let i = 0; i < n; i++) {
    arry1.push(i);
  }
};
makeArry();
const len = arry1.length;
for (let n = len; n > 0; n--) {
  const index = Math.floor(Math.random() * n);
  arry2.push(arry1[index]);
  arry1.splice(index, 1);
}
///最初の問題とメッセージをセット///
///↓ id.innreTextでテキストを表示できる！！！///
question.innerText = questions[arry2[0]].name;
const message = document.getElementById("try-again");
message.textContent = "Let's try";
///正解と不正解の数を表示するdivを取得
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
///ランダムで生成された配列のインデックスと正解数、不正解数を初期化///
let index = 0;
let correctNum = 0;
let incorrectNum = 0;
///正誤判定の関数///
const forward = () => {
  const $inputText = document.getElementById("input-text").value;
  /// 終わりの問題の2つ前までならこちらへ分岐///
  if (index + 1 < n) {
    message.textContent = "";
    ///もし正解なら////
    if ($inputText === questions[arry2[index]].ans) {
      index++;
      correctNum++;
      question.innerText = questions[arry2[index]].name;
      correct.textContent = correctNum;
      document.getElementById("input-text").value = "";
      message.textContent = "Continue!";
      ///正解でなければ///
    } else {
      incorrectNum++;
      incorrect.textContent = incorrectNum;
      document.getElementById("input-text").value = "";
      message.textContent = "Try again!";
    }
    ///終わりの問題の1つ前になったらこちらへ分岐///
    ///次にクリックした時に出るのが最後の問題///
    ///もし正解ならフィニッシュ///
  } else if ($inputText === questions[arry2[index]].ans) {
    index++;
    correctNum++;
    correct.textContent = correctNum;
    message.textContent = "You're finished!";
    document.getElementById("input-text").value = "OK!";
    ///正解でなければ、トライアゲイン///
  } else {
    document.getElementById("input-text").value = "";
    message.textContent = "Try again!";
  }
};
///決定ボタンを押した時に関数を発火///
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (document.getElementById("input-text").value !== "") {
    forward();
  }
});

///パソコン用にエンターキーでも入力可設定///
window.addEventListener(
  "keydown",
  function (e) {
    if (e.key === "Enter") {
      forward();
    }
  },
  true
);
