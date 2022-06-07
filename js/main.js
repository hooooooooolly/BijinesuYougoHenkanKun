// 「ごめんなさい」「ごめん」のように同じ単語がリストに存在する場合、
// 短い単語を後ろに持っていってください。
const convAry = [
  ["！！", "。"],
  ["！", "。"],
  ["ども", "おせわになっております"],
  ["こんちゃ", "おせわになっております"],
  ["おひさ", "ご無沙汰しております"],
  ["久しぶり", "ご無沙汰しております"],
  ["ひさしぶり", "ご無沙汰しております"],
  ["この前", "先日"],
  ["マジで", "大変"],
  ["マジ", "大変"],
  ["超", "大変"],
  ["ごめんなさい", "申し訳ありませんでした"],
  ["ごめんね", "申し訳ありませんでした"],
  ["ごめん", "申し訳ありませんでした"],
  ["いい？", "よろしいでしょうか？"],
  ["行きたい", "お伺いしたい"],
  ["行くね", "お伺いいたします"],
  ["またね", "以上です、よろしくお願いいたします"],
  ["じゃあね", "以上です、よろしくお願いいたします"],
];
const CONV_BEFORE = 0;
const CONV_AFTER = 1;

// 配列を元にした変換処理
function genTxt() {
  var txt = document.getElementById("befGen").value;
  for (var i = 0; i < convAry.length; i++) {
    txt = txt.replace(convAry[i][CONV_BEFORE], convAry[i][CONV_AFTER]);
  }
  document.getElementById("aftGen").value = txt;
}

// 配列を元に変換一覧表を動的に表示
window.addEventListener("load", function() {
  var tbody = document.getElementById('column');
  if (tbody != null) {
    for (var i = 0; i < convAry.length; i++) {
      var tr = document.createElement('tr');
      for (var j = CONV_BEFORE; j <= CONV_AFTER; j++) {
        var td = document.createElement('td');
        td.innerHTML = convAry[i][j];
        tbody.appendChild(td);
        td.classList.add("clm");
      }
      tbody.appendChild(tr);
    }
  }
});
