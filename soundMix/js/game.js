/**
 * 嘒嘒知音 (Soundscape Detective) 遊戲主要邏輯
 * 負責控制遊戲流程、播放音軌、評分和響應使用者操作
 */

document.addEventListener('DOMContentLoaded', function() {
  // 遊戲變數初始化
  let currentQuestionIndex = 0;
  let score = 0;
  let correctAnswers = 0;
  let audioPlayer = document.getElementById('audio-track');
  let isAudioPlaying = false;
  let userSelections = {};
  let currentQuestionScore = 0; // 當前題目的得分
  let resetConfirmVisible = false; // 控制確認框顯示狀態

  // 元素引用
  const playButton = document.getElementById('play-button');
  const playIcon = document.querySelector('.play-icon');
  const pauseIcon = document.querySelector('.pause-icon');
  const audioProgressBar = document.getElementById('audio-progress-bar');
  const audioTime = document.getElementById('audio-time');
  const submitButton = document.getElementById('submit-button');
  const nextButton = document.getElementById('next-question');
  const restartButton = document.getElementById('restart-button');
  const shareButton = document.getElementById('share-button');
  const hintButton = document.getElementById('hint-button');
  const hintText = document.getElementById('hint-text');
  const optionsContainer = document.getElementById('options-container');
  const questionContainer = document.getElementById('question-container');
  const questionText = document.getElementById('question-text');
  const correctCountSpan = document.getElementById('correct-count');
  const resultContainer = document.getElementById('result-container');
  const finalResultContainer = document.getElementById('final-result');
  const currentQuestionSpan = document.getElementById('current-question');
  const progressFill = document.querySelector('.progress-fill');
  const resultTitle = document.getElementById('result-title');
  const resultScore = document.getElementById('result-score');
  const resultFeedback = document.getElementById('result-feedback');
  const correctAnswersDiv = document.getElementById('correct-answers');
  const totalScore = document.getElementById('total-score');
  const scoreComment = document.getElementById('score-comment');
  const resetGameButton = document.getElementById('reset-game-button'); // 新增: 重置遊戲按鈕

  // 初始化遊戲
  initGame();

  // 遊戲初始化函數
  function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    userSelections = {};
    loadQuestion(currentQuestionIndex);
    updateProgressBar();
    
    // 隱藏結果和最終結果容器
    resultContainer.classList.add('hidden');
    finalResultContainer.classList.add('hidden');
    
    // 顯示問題容器
    questionContainer.classList.remove('hidden');
    
    // 重置分數顯示
    if (document.getElementById('current-total-score')) {
      document.getElementById('current-total-score').textContent = '0';
    }
  }
  // 加載問題
  function loadQuestion(index) {
    const question = gameQuestions[index];
    
    // 更新問題文本
    questionText.textContent = question.question;
    correctCountSpan.textContent = question.correctCount;
    currentQuestionSpan.textContent = index + 1;
    
    // 清空選項容器
    optionsContainer.innerHTML = '';
    
    // 打散選項順序
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
      // 創建選項
    shuffledOptions.forEach(option => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'option-item';
      optionDiv.id = option.id;
      optionDiv.dataset.optionId = option.id;
      
      const label = document.createElement('div');
      label.className = 'option-label';
      label.textContent = option.text;
      
      optionDiv.appendChild(label);
      optionsContainer.appendChild(optionDiv);
      
      // 添加點擊事件
      optionDiv.addEventListener('click', function() {
        this.classList.toggle('selected');
        // 更新用戶選擇
        userSelections[option.id] = this.classList.contains('selected');
      });
    });
    
    // 設置音軌
    audioPlayer.src = question.audioSrc;
    audioPlayer.load();
    
    // 重置播放按鈕和進度條
    isAudioPlaying = false;
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    audioProgressBar.style.width = '0%';
    audioTime.textContent = '00:00 / 00:00';
    
    // 重置使用者選擇
    userSelections = {};
    
    // 隱藏提示文本
    hintText.style.display = 'none';
  }

  // 更新進度條
  function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / gameSettings.questionsPerGame) * 100;
    progressFill.style.width = `${progress}%`;
  }

  // 播放按鈕點擊事件
  playButton.addEventListener('click', function() {
    if (isAudioPlaying) {
      audioPlayer.pause();
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
    } else {
      audioPlayer.play();
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
    }
    isAudioPlaying = !isAudioPlaying;
  });

  // 音軌播放更新進度條
  audioPlayer.addEventListener('timeupdate', function() {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    audioProgressBar.style.width = `${percent}%`;
    
    // 更新時間顯示
    const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
    const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
    const totalMinutes = Math.floor(audioPlayer.duration / 60) || 0;
    const totalSeconds = Math.floor(audioPlayer.duration % 60) || 0;
    
    audioTime.textContent = `${padZero(currentMinutes)}:${padZero(currentSeconds)} / ${padZero(totalMinutes)}:${padZero(totalSeconds)}`;
  });

  // 音軌結束事件
  audioPlayer.addEventListener('ended', function() {
    isAudioPlaying = false;
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  });

  // 點擊進度條快進
  document.querySelector('.audio-progress').addEventListener('click', function(e) {
    const percent = (e.offsetX / this.offsetWidth);
    audioPlayer.currentTime = percent * audioPlayer.duration;
  });

  // 提示按鈕點擊事件
  hintButton.addEventListener('click', function() {
    hintText.style.display = hintText.style.display === 'none' ? 'block' : 'none';
  });
  // 提交按鈕點擊事件
  submitButton.addEventListener('click', function() {
    // 計算得分
    calculateScore();
    
    // 顯示結果
    showResult();
  });  // 計算當前問題得分
  function calculateScore() {
    const question = gameQuestions[currentQuestionIndex];
    let questionScore = 0;
    let correctCount = 0;
    
    question.options.forEach(option => {
      const userSelected = userSelections[option.id] || false;
      
      // 正確答案且用戶選擇了
      if (option.correct && userSelected) {
        // 如果是蟬相關選項，給予更高分數
        if (option.text.includes('蟬')) {
          questionScore += gameSettings.scorePerCorrect * 1.5;
        } else {
          questionScore += gameSettings.scorePerCorrect;
        }
        correctCount += 1;
      }
      
      // 錯誤答案但用戶選擇了
      if (!option.correct && userSelected) {
        questionScore -= gameSettings.penaltyPerWrong;
      }
    });
    
    // 確保分數不為負
    questionScore = Math.max(0, questionScore);
    
    currentQuestionScore = questionScore;
    score += questionScore;
    
    // 如果所有正確選項都選中且沒有選錯，算作一題答對
    const totalCorrectOptions = question.options.filter(o => o.correct).length;
    const wrongSelections = question.options.filter(o => !o.correct && (userSelections[o.id] || false)).length;
    if (correctCount === totalCorrectOptions && wrongSelections === 0) {
      correctAnswers += 1;
    }
    
    // 更新當前總分顯示
    if (document.getElementById('current-total-score')) {
      document.getElementById('current-total-score').textContent = score;
    }
  }
  // 顯示結果
  function showResult() {
    // 隱藏問題界面
    questionContainer.classList.add('hidden');
    submitButton.classList.add('hidden');
    
    // 顯示回饋界面
    resultContainer.classList.remove('hidden');
    
    const question = gameQuestions[currentQuestionIndex];
    
    // 高亮顯示正確答案
    question.options.forEach(option => {
      const optionDiv = document.getElementById(option.id);
      const userSelected = userSelections[option.id] || false;
      
      if (option.correct) {
        optionDiv.classList.add('correct');
      } else if (userSelected) {
        optionDiv.classList.add('wrong');
      }
    });
    
    // 設置回饋文本
    resultTitle.textContent = question.feedbackTitle;
    
    // 顯示得分
    resultScore.textContent = currentQuestionScore;
    
    // 檢查玩家是否正確辨識了蟬種
    const cicadaOptions = question.options.filter(o => o.text.includes('蟬'));
    const correctCicadas = cicadaOptions.filter(o => o.correct);
    let correctlyIdentifiedCicadas = 0;
    
    correctCicadas.forEach(cicada => {
      if (userSelections[cicada.id]) {
        correctlyIdentifiedCicadas++;
      }
    });
    
    // 根據辨識蟬種的結果顯示不同回饋
    let feedbackText = question.feedback;
    
    if (correctCicadas.length > 0 && correctlyIdentifiedCicadas < correctCicadas.length) {
      // 如果有蟬種需要辨識但玩家沒有全部答對
      feedbackText = "您似乎漏掉了一些蟬的聲音。別灰心，多聆聽幾次，慢慢就能分辨出不同蟬種獨特的鳴叫！";
    }
    
    // 顯示回饋
    resultFeedback.textContent = feedbackText;
    
    // 顯示正確答案詳情
    correctAnswersDiv.innerHTML = `
      <div class="correct-answers-title">正確答案詳解</div>
      <div class="correct-answers-content">
        <p>${question.additionalInfo}</p>
        <ul class="correct-answers-list">
          ${question.options.filter(o => o.correct).map(o => {
            let info = '';
            if (o.text in cicadaInfo) {
              info = `<br><small>${cicadaInfo[o.text]}</small>`;
            }
            return `<li>${o.text}${info}</li>`;
          }).join('')}
        </ul>
      </div>
    `;
  }

  // 下一題按鈕點擊事件
  nextButton.addEventListener('click', function() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < gameSettings.questionsPerGame) {
      // 顯示下一題
      loadQuestion(currentQuestionIndex);
      updateProgressBar();
      
      // 隱藏結果界面
      resultContainer.classList.add('hidden');
      
      // 顯示問題界面和提交按鈕
      questionContainer.classList.remove('hidden');
      submitButton.classList.remove('hidden');
    } else {
      // 遊戲結束，顯示最終結果
      showFinalResult();
    }
  });

  // 顯示最終結果
  function showFinalResult() {
    // 隱藏結果界面
    resultContainer.classList.add('hidden');
    
    // 顯示最終結果界面
    finalResultContainer.classList.remove('hidden');
    
    // 顯示總分
    totalScore.textContent = score;
    
    // 顯示評語
    let comment = '';
    for (let i = scoreComments.length - 1; i >= 0; i--) {
      if (score >= scoreComments[i].minScore) {
        comment = scoreComments[i].comment;
        break;
      }
    }
    scoreComment.textContent = comment;
  }

  // 重新開始按鈕點擊事件
  restartButton.addEventListener('click', function() {
    // 隱藏最終結果界面
    finalResultContainer.classList.add('hidden');
    
    // 重置遊戲
    initGame();
    
    // 顯示提交按鈕
    submitButton.classList.remove('hidden');
  });  // 分享按鈕點擊事件
  shareButton.addEventListener('click', function() {
    // 創建分享視窗
    createShareModal();
  });
  
  // 創建分享視窗
  function createShareModal() {
    // 獲取最終評語
    let finalComment = '';
    for (let i = scoreComments.length - 1; i >= 0; i--) {
      if (score >= scoreComments[i].minScore) {
        finalComment = scoreComments[i].comment;
        break;
      }
    }
    
    // 計算正確辨識的蟬種數量
    let totalCicadas = 0;
    let identifiedCicadas = 0;
    
    gameQuestions.forEach(question => {
      const cicadaOptions = question.options.filter(o => o.text.includes('蟬') && o.correct);
      totalCicadas += cicadaOptions.length;
    });
    
    // 統計答對的蟬種
    for (let i = 0; i < gameQuestions.length; i++) {
      const question = gameQuestions[i];
      const cicadaOptions = question.options.filter(o => o.text.includes('蟬') && o.correct);
      
      if (i < currentQuestionIndex) {
        cicadaOptions.forEach(cicada => {
          if (userSelections[cicada.id] === true) {
            identifiedCicadas++;
          }
        });
      }
    }
    
    // 創建分享視窗
    const overlay = document.createElement('div');
    overlay.className = 'share-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'share-modal';
    
    // 關閉按鈕
    const closeButton = document.createElement('button');
    closeButton.className = 'share-close';
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => document.body.removeChild(overlay));
    
    // 內容容器
    const content = document.createElement('div');
    content.className = 'share-content';
    content.id = 'share-content';  // 用於截圖
    
    // 內容
    const title = document.createElement('div');
    title.className = 'share-title';
    title.textContent = '嘒嘒知音 - 遊戲結果';
    
    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'share-score';
    scoreDiv.textContent = score.toString();
    
    const commentDiv = document.createElement('div');
    commentDiv.className = 'share-comment';
    commentDiv.textContent = finalComment;
      const infoDiv = document.createElement('div');
    infoDiv.className = 'share-cicada-info';
    infoDiv.textContent = `您成功辨識出了 ${identifiedCicadas} 種蟬鳴聲。在這麼多聲音中，辨識出蟬鳴是不是沒那麼容易呀！現代都市環境下，牠們的聲音經常被淹沒，但我們仍能聆聽與保護這些大自然的歌者。`;
    
    // 添加元素到內容容器
    content.appendChild(title);
    content.appendChild(scoreDiv);
    content.appendChild(commentDiv);
    content.appendChild(infoDiv);
    
    // 操作按鈕
    const actions = document.createElement('div');
    actions.className = 'share-actions';
    
    const downloadButton = document.createElement('button');
    downloadButton.className = 'share-download';
    downloadButton.textContent = '下載結果';
    downloadButton.addEventListener('click', () => shareDownload());
    
    const copyButton = document.createElement('button');
    copyButton.className = 'share-copy';
    copyButton.textContent = '複製到剪貼簿';
    copyButton.addEventListener('click', () => shareCopy());
    
    actions.appendChild(downloadButton);
    actions.appendChild(copyButton);
    
    // 組裝視窗
    modal.appendChild(closeButton);
    modal.appendChild(content);
    modal.appendChild(actions);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }
  
  // 下載結果
  function shareDownload() {
    const content = document.getElementById('share-content');
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = '正在生成圖片...';
    loadingMessage.style.position = 'absolute';
    loadingMessage.style.top = '50%';
    loadingMessage.style.left = '50%';
    loadingMessage.style.transform = 'translate(-50%, -50%)';
    loadingMessage.style.padding = '10px 20px';
    loadingMessage.style.backgroundColor = 'rgba(0,0,0,0.7)';
    loadingMessage.style.color = 'white';
    loadingMessage.style.borderRadius = '5px';
    loadingMessage.style.zIndex = '9999';
    document.body.appendChild(loadingMessage);
    
    setTimeout(() => {
      html2canvas(content).then(canvas => {
        document.body.removeChild(loadingMessage);
        const link = document.createElement('a');
        link.download = '嘒嘒知音-遊戲結果.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }, 100);
  }
  
  // 複製到剪貼簿
  function shareCopy() {
    const content = document.getElementById('share-content');
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = '正在複製...';
    loadingMessage.style.position = 'absolute';
    loadingMessage.style.top = '50%';
    loadingMessage.style.left = '50%';
    loadingMessage.style.transform = 'translate(-50%, -50%)';
    loadingMessage.style.padding = '10px 20px';
    loadingMessage.style.backgroundColor = 'rgba(0,0,0,0.7)';
    loadingMessage.style.color = 'white';
    loadingMessage.style.borderRadius = '5px';
    loadingMessage.style.zIndex = '9999';
    document.body.appendChild(loadingMessage);
    
    setTimeout(() => {
      html2canvas(content).then(canvas => {
        document.body.removeChild(loadingMessage);
        
        canvas.toBlob(blob => {
          const item = new ClipboardItem({ 'image/png': blob });
          navigator.clipboard.write([item]).then(() => {
            alert('已成功複製到剪貼簿！');
          }).catch(err => {
            console.error('複製失敗:', err);
            alert('複製失敗，請嘗試下載圖片');
          });
        });
      });
    }, 100);
  }
  
  // html2canvas 已在 HTML 頭部加載

  // 工具函數：補零
  function padZero(num) {
    return num.toString().padStart(2, '0');
  }

  // 重置遊戲按鈕點擊事件
  resetGameButton.addEventListener('click', function() {
    showResetConfirm();
  });
  // 顯示重置確認框
  function showResetConfirm() {
    // 如果確認框已經存在，則不重複建立
    if (resetConfirmVisible) return;
    
    resetConfirmVisible = true;
    
    // 創建確認框
    const confirmBox = document.createElement('div');
    confirmBox.className = 'reset-confirm';
    confirmBox.id = 'reset-confirm';
    
    confirmBox.innerHTML = `
      <p>確定要重新開始遊戲嗎？當前進度將會丟失。</p>
      <div class="reset-confirm-buttons">
        <button class="confirm-yes">確定</button>
        <button class="confirm-no">取消</button>
      </div>
    `;
    
    document.querySelector('.game-container').appendChild(confirmBox);
    
    // 確認按鈕事件
    confirmBox.querySelector('.confirm-yes').addEventListener('click', function() {
      removeConfirmBox();
      resetGame();
    });
    
    // 取消按鈕事件
    confirmBox.querySelector('.confirm-no').addEventListener('click', function() {
      removeConfirmBox();
    });
    
    // 點擊其他區域關閉確認框
    document.addEventListener('click', closeConfirmOnOutsideClick);
  }
    // 關閉確認框
  function removeConfirmBox() {
    const confirmBox = document.getElementById('reset-confirm');
    if (confirmBox) {
      document.querySelector('.game-container').removeChild(confirmBox);
      resetConfirmVisible = false;
      
      // 移除事件監聽器
      document.removeEventListener('click', closeConfirmOnOutsideClick);
    }
  }
  
  // 點擊外部關閉確認框
  function closeConfirmOnOutsideClick(e) {
    const confirmBox = document.getElementById('reset-confirm');
    if (confirmBox && !confirmBox.contains(e.target) && e.target.id !== 'reset-game-button') {
      removeConfirmBox();
    }
  }
  
  // 重置遊戲
  function resetGame() {
    // 暫停音軌
    if (isAudioPlaying) {
      audioPlayer.pause();
      isAudioPlaying = false;
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
    }
    
    // 隱藏結果和最終結果容器
    resultContainer.classList.add('hidden');
    finalResultContainer.classList.add('hidden');
    
    // 重置遊戲
    initGame();
    
    // 顯示提交按鈕
    submitButton.classList.remove('hidden');
  }
});
