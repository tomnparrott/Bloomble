// dailyWord.js

function getTodaysDate() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }
  
  
  function getDailyWordIndex(wordBankLength) {
    const startDate = new Date('2023-11-16'); // Replace with the launch date of your game
    const today = new Date(getTodaysDate());
    const diff = today - startDate;
    const index = Math.floor(diff / (24 * 60 * 60 * 1000));
    return index % wordBankLength;
  }
  
  function hasPlayedToday() {
    const lastPlayDate = localStorage.getItem('lastPlayDate');
    const today = getTodaysDate();
    return lastPlayDate === today.toISOString().split('T')[0];
  }

function setLastPlayDate() {
  const today = getTodaysDate();
  localStorage.setItem('lastPlayDate', today.toISOString().split('T')[0]);
}

  // Ensure these functions are accessible from other scripts
  window.dailyWord = {
    getTodaysDate,
    getDailyWordIndex,
    hasPlayedToday,
    setLastPlayDate
  };
  