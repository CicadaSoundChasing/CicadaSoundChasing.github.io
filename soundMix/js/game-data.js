/**
 * 遊戲資料設定檔
 * 此檔案包含遊戲的關卡、問題、選項與答案設定
 */

// 遊戲設定
const gameSettings = {
  maxScore: 100,           // 總分
  questionsPerGame: 5,     // 題目數量
  scorePerCorrect: 5,      // 每個正確選項的分數
  penaltyPerWrong: 2,      // 錯誤選項的懲罰分數
};

// 蟬聲特性的說明資料
const cicadaInfo = {
  "台灣熊蟬": "一種體型較大的蟬，叫聲宏亮厚重，通常在高大的樹木上鳴叫，頻率較低沉。",
  "紅脈熊蟬": "體色黃褐，翅膀有明顯紅色脈絡，鳴聲短促有節奏，常在白天鳴叫。",
  "台灣騷蟬": "體型較小，叫聲高頻且持續時間長，在樹叢中大量聚集時能產生震耳欲聾的嘒嘒聲。"
};

// 各關卡問題資料
const gameQuestions = [
  {
    question: "第1題：請勾選出所有聽見的大自然的聲音。（可複選）",
    audioSrc: "audio/mix1.mp3",
    options: [
      { id: "option1", text: "台灣熊蟬", correct: true },
      { id: "option2", text: "蟋蟀聲", correct: true },
      { id: "option3", text: "壁虎聲", correct: true },
      { id: "option4", text: "風聲", correct: true },
      { id: "option5", text: "水流聲", correct: false },
      { id: "option6", text: "腳步聲", correct: false },
      { id: "option7", text: "挖土機聲", correct: false },
      { id: "option8", text: "鳥叫聲", correct: false }
    ],
    correctCount: 4,
    feedbackTitle: "第一關：大自然聲音辨識",
    feedback: "您能辨識出大自然的聲音！在這個混合音軌中，台灣熊蟬的低沉鳴叫、蟋蟀的輕快聲響、壁虎的輕微叫聲以及風聲構成了一個自然的聲景。",
    additionalInfo: "城市與自然交界處常常能聽到這樣的聲音混合，但許多人已經很少能專注聆聽這些大自然的聲音了。"  },
  {
    question: "第2題：請勾選出所有聽見的大自然聲音。（可複選）",
    audioSrc: "audio/mix2.mp3",
    options: [
      { id: "option1", text: "紅脈熊蟬", correct: true },
      { id: "option2", text: "鳥叫聲", correct: true },
      { id: "option3", text: "蛙鳴", correct: true },
      { id: "option4", text: "蟋蟀聲", correct: true },
      { id: "option5", text: "水流聲", correct: false },
      { id: "option6", text: "壁虎聲", correct: false },
      { id: "option7", text: "車輛聲", correct: false }
    ],
    correctCount: 4,
    feedbackTitle: "第二關：生物聲音辨識",
    feedback: "做得好！您成功辨識出了紅脈熊蟬特有的鳴叫、鳥類的歌唱、青蛙的嗚叫以及蟋蟀的聲音。這些生物的聲音共同構成了豐富的生態聲景。",    additionalInfo: "蟬的聲音常被其他自然聲音所掩蓋，需要仔細聆聽才能分辨出來。不同的蟬種有各自獨特的鳴叫頻率和節奏。"
  },
  {
    question: "第3題：請勾選出所有聽見的聲音。（可複選）",
    audioSrc: "audio/mix3.mp3",
    options: [
      { id: "option1", text: "台灣騷蟬", correct: true },
      { id: "option2", text: "腳步聲", correct: true },
      { id: "option3", text: "蚊子聲", correct: true },
      { id: "option4", text: "車輛聲", correct: true },
      { id: "option5", text: "台灣熊蟬", correct: false },
      { id: "option6", text: "螽斯聲", correct: false },
      { id: "option7", text: "孔雀聲", correct: false }
    ],
    correctCount: 4,
    feedbackTitle: "第三關：都市與自然聲音混合",
    feedback: "您的聽力真敏銳！這次的混合音軌中包含了台灣騷蟬的高頻鳴聲、人類的腳步聲、蚊子的嗡嗡聲以及都市中的車輛噪音。",    additionalInfo: "在都市環境中，自然的聲音經常被人為的噪音所覆蓋，這就是所謂的「聲音污染」，對許多依賴聲音溝通的生物造成了挑戰。"
  },
  {
    question: "第4題：請勾選出所有聽見的聲音。（可複選）",
    audioSrc: "audio/mix4.mp3",
    options: [
      { id: "option1", text: "台灣熊蟬", correct: true },
      { id: "option2", text: "台灣騷蟬", correct: true },
      { id: "option3", text: "紅脈熊蟬", correct: true },
      { id: "option4", text: "蟋蟀聲", correct: false },
      { id: "option5", text: "鳥叫聲", correct: false },
      { id: "option6", text: "蛙鳴", correct: false }
    ],
    correctCount: 3,
    feedbackTitle: "第四關：多種蟬聲辨識",
    feedback: "太棒了！您成功辨識出了三種不同的蟬聲：台灣熊蟬的低沉鳴聲、台灣騷蟬的高頻嘒嘒聲，以及紅脈熊蟬獨特的節奏性鳴叫。",    additionalInfo: "台灣擁有豐富的蟬種多樣性，不同的蟬種適應了不同的環境，也發展出獨特的鳴叫方式。辨識蟬聲是了解生態系統健康的一個重要方面。"
  },
  {
    question: "第5題：請勾選出所有聽見的蟬種。（可複選）",
    audioSrc: "audio/mix5.mp3",
    options: [
      { id: "option1", text: "紅脈熊蟬", correct: true },
      { id: "option2", text: "台灣騷蟬", correct: true },
      { id: "option3", text: "台灣熊蟬", correct: false },
      { id: "option4", text: "陽明山暮蟬", correct: false },
      { id: "option5", text: "草蟬", correct: false },
      { id: "option6", text: "高砂熊蟬", correct: false },
      { id: "option7", text: "蘭嶼姬春蟬", correct: false }
    ],
    correctCount: 2,
    feedbackTitle: "第五關 (魔王題)：專業級蟬種辨識",
    feedback: "恭喜完成最終挑戰！在這個複雜的聲景中，您成功識別出了紅脈熊蟬和台灣騷蟬的聲音。這需要相當專業的知識和敏銳的聽覺。",
    additionalInfo: "蟬的聲音不僅是夏日的象徵，也是生態系統健康的指標。每種蟬都有特定的棲息環境和鳴叫季節。保護自然環境，也是在保護這些聲音的多樣性。"
  }
];

// 分數評語設定
const scoreComments = [
  { minScore: 0, comment: "需要多加練習！再聆聽一次大自然的聲音吧！" },
  { minScore: 20, comment: "繼續探索，大自然的聲音等著你來發現！" },
  { minScore: 40, comment: "做得不錯！您開始能辨識部分自然聲音了。" },
  { minScore: 60, comment: "很棒！您的自然聲音辨識能力相當不錯。" },
  { minScore: 80, comment: "傑出！您是真正的自然知音！" },
  { minScore: 100, comment: "完美！您擁有蟬類專家等級的辨識能力！" }
];
