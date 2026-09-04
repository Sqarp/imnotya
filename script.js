// 質問データのリスト（オブジェクト配列）
const quizData = [
  {
    question: "第一問：初めて一緒に行ったデートの場所は？？",
    options: ["水族館", "映画館", "カフェ", "遊園地"],
    answerIndex: 0 // 正解の配列インデックス（0番目＝水族館）
  },
  {
    question: "第二問：僕が一番好きな君のの手料理は？",
    options: ["ハンバーグ", "カレー", "オムライス", "肉じゃが"],
    answerIndex: 2 // 正解の配列インデックス（2番目＝オムライス）
  }
];

let currentStep = 0;

function showQuestion() {
  const data = quizData[currentStep];
  document.getElementById("question-text").innerText = data.question;
  
  const optionsDiv = document.getElementById("options-container");
  optionsDiv.innerHTML = "";

  data.options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.innerText = optionText;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const data = quizData[currentStep];
  if (selectedIndex === data.answerIndex) {
    currentStep++;
    if (currentStep < quizData.length) {
      showQuestion();
    } else {
      // 全問終了したらサプライズ画面へ
      document.getElementById("quiz-container").classList.add("hidden");
      document.getElementById("result-container").classList.remove("hidden");
    }
  } else {
    alert("不正解！もう一回考えてみて！");
  }
}

// 初期実行
showQuestion();
