const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリック時のイベントを設定
btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
