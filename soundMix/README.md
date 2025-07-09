# 蟬鳴知多少 (Cicada Sound ID) 遊戲

這是一個互動式的聲音辨識遊戲，旨在幫助玩家辨別蟬鳴聲與其他環境音。遊戲包含10道題目，每題答對得10分，最後會顯示總分和評語，並可以分享成績。

## 遊戲結構

### 文件結構
```
cicada-game/
│
├── audio/               # 音頻文件存放目錄
│   ├── taiwan_bear_cicada.mp3    # 台灣熊蟬聲音
│   ├── black_cicada.mp3          # 黑蟬聲音
│   ├── highsand_cicada.mp3       # 高砂熊蟬聲音
│   ├── cricket.mp3               # 蟋蟀聲音
│   ├── bird_chirping.mp3         # 鳥鳴聲音
│   ├── construction_noise.mp3    # 施工噪音
│   ├── frog.mp3                  # 蛙鳴聲音
│   └── grasshopper.mp3           # 螽斯聲音
│
├── images/              # 圖片文件存放目錄
│   ├── taiwan_bear_cicada.jpg    # 台灣熊蟬圖片
│   ├── black_cicada.jpg          # 黑蟬圖片
│   ├── highsand_cicada.jpg       # 高砂熊蟬圖片
│   └── forest-bg.jpg             # 背景圖片
│
├── cicada-game.html     # 完整的 HTML 文件
└── cicada-game-body-only.html  # 只有 body 部分的 HTML 文件
```

## 如何使用

### 1. 完整版
直接在瀏覽器中打開 `cicada-game.html` 文件即可開始遊戲。

### 2. 集成到現有網頁
如果您想將這個遊戲集成到現有的網頁中，只需將 `cicada-game-body-only.html` 中的內容複製到您的 HTML 文件的 `<body>` 部分即可。

確保您也複製了 `audio` 和 `images` 文件夾到您的網站目錄，並正確設置路徑。

## 自定義

### 添加/替換音檔

1. 將您的音頻文件放入 `audio` 文件夾中
2. 在 JavaScript 代碼中的 `soundLibrary` 數組中修改或添加新條目：

```javascript
{
    id: '唯一ID',
    displayName: '顯示名稱',
    filePath: 'audio/您的音頻文件.mp3',
    isCicada: true/false,  // 是否為蟬聲
    cicadaSpecies: '蟬的種類名稱',  // 如果是蟬聲
    cicadaImage: 'images/您的圖片.jpg',  // 如果是蟬聲
    cicadaDescription: '關於這種蟬的描述'  // 如果是蟬聲
}
```

### 修改遊戲選項

- 要修改每回合顯示的音頻數量，請調整 `selectRoundSounds()` 函數中的邏輯
- 要修改視覺樣式，請調整 CSS 樣式

## 遊戲特性

1. 固定10題挑戰，每題10分
2. 即時音頻播放控制
3. 交互式界面
4. 答題後的反饋
5. 正確答案的知識擴展彈窗
6. 結算畫面和分數評語
7. 成績分享功能（可下載結果圖片）
8. 引導用戶繼續瀏覽網頁內容
9. 響應式設計

## 技術要求

- 現代網絡瀏覽器（支持 HTML5 Audio）
- JavaScript 啟用
- 無需網絡連接（本地運行）
