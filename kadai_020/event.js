// ボタンとテキストの要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

// ボタンクリック時のイベントを設定
button.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
});