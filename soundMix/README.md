# 嘒嘒知音 (Soundscape Detective)

一個有關辨識蟬鳴與自然聲景的互動遊戲

## 遊戲概述

「嘒嘒知音」是一個音軌辨識遊戲，玩家需要聆聽混合的音軌，並辨識出其中包含的聲音。遊戲旨在讓玩家體驗蟬所處的複雜聲音環境，了解辨識蟬鳴的挑戰，並間接感受噪音污染對自然聲景的影響。

## 檔案結構

```
soundMix/
├── audio/                  - 存放音訊檔案
│   ├── mix1.mp3            - 第一關混合音軌
│   ├── mix2.mp3            - 第二關混合音軌
│   ├── mix3.mp3            - 第三關混合音軌
│   ├── mix4.mp3            - 第四關混合音軌
│   └── mix5.mp3            - 第五關混合音軌
├── css/                    - 樣式檔案
│   ├── style.css           - 主要樣式
│   └── animation.css       - 動畫效果
├── images/                 - 圖片資源
│   ├── background.jpg      - 背景圖片
│   ├── cicada1.jpg         - 台灣熊蟬圖片
│   ├── cicada2.jpg         - 紅脈熊蟬圖片
│   └── cicada3.jpg         - 台灣騷蟬圖片
├── js/                     - JavaScript檔案
│   ├── game.js             - 主要遊戲邏輯
│   └── game-data.js        - 遊戲資料設定
├── soundMix-game.html      - 完整遊戲頁面（包含頭部和完整結構）
└── soundMix-game-body-only.html - 僅包含遊戲主體的HTML（可嵌入其他網頁）
```

## 使用說明

1. 完整獨立使用：
   - 直接開啟 `soundMix-game.html` 即可執行完整遊戲

2. 嵌入至現有網頁：
   - 複製 `soundMix-game-body-only.html` 中的內容到您的網頁中
   - 確保引入CSS和JavaScript檔案：
     ```html
     <link rel="stylesheet" href="path/to/soundMix/css/style.css">
     <link rel="stylesheet" href="path/to/soundMix/css/animation.css">
     <script src="path/to/soundMix/js/game-data.js"></script>
     <script src="path/to/soundMix/js/game.js"></script>
     ```

## 自訂音訊和圖片

1. 替換音訊檔：
   - 將您準備好的混合音軌放入 `audio/` 資料夾
   - 在 `js/game-data.js` 中更新音軌路徑

2. 替換圖片：
   - 將蟬種或其他相關圖片放入 `images/` 資料夾
   - 在 `js/game-data.js` 中更新圖片路徑（如需顯示）

## 遊戲調整

可以在 `js/game-data.js` 中調整以下設定：
1. 各關卡的問題和選項
2. 正確答案設定
3. 計分規則（蟬種相關選項得分為一般選項的1.5倍）
4. 反饋文字

## 遊戲特色

1. **互動式選項**：點擊選項即可選取，無需勾選框
2. **實時得分顯示**：遊戲進行過程中可隨時查看當前得分
3. **錯誤扣分機制**：選錯選項會扣分，增加遊戲難度
4. **結果分享功能**：遊戲結束後可下載結果或複製到剪貼簿分享
5. **動態視覺反饋**：正確選項顯示為綠色，錯誤選項為紅色
6. **隨時重置功能**：右下角常駐「重新答題」按鈕，玩家可隨時重新開始遊戲