const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() +1
const day = today.getDate();

// 「YYYY年MM月DD日」形式で出力
console.log(`${year}年${month}月${day}日`);
