// statistics.js

function getStatistics() {
    const stats = localStorage.getItem('statistics');
    return stats ? JSON.parse(stats) : {
      played: 0,
      wins: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: new Array(7).fill(0) // Now 7 elements, with the last one for fails
    };
  }
  
  function saveStatistics(stats) {
    localStorage.setItem('statistics', JSON.stringify(stats));
  }
  
  function updateStatistics(won, guessCount) {
    const stats = getStatistics();
  
    stats.played += 1;
    if (won) {
        stats.wins += 1;
        stats.currentStreak += 1;
        stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
        stats.guessDistribution[guessCount - 1] += 1; // Update the guess distribution for the winning guess count
    } else {
        // User failed to guess the word
        stats.currentStreak = 0;
        stats.guessDistribution[6] += 1; // Increment the fail count at index 6
    }
  
    saveStatistics(stats);
}

  function displayStatistics() {
    const stats = window.statistics.getStatistics();

    // Update the DOM elements with the new statistics
    document.getElementById('playedCount').textContent = stats.played;
    document.getElementById('winsCount').textContent = stats.wins;
    document.getElementById('winPercent').textContent = ((stats.wins / stats.played) * 100).toFixed(0) + '%';
    document.getElementById('currentStreakCount').textContent = stats.currentStreak;
    document.getElementById('maxStreakCount').textContent = stats.maxStreak;

    // Update the progress bars for attempts
    for (let i = 0; i < 6; i++) { // Adjust the loop to iterate from 0 to 5
        const progressBar = document.getElementById(`try${i+1}`);
        const countSpan = document.getElementById(`tryCount${i+1}`);
        if (progressBar && countSpan) {
            progressBar.value = stats.guessDistribution[i];
            progressBar.max = stats.played;
            countSpan.textContent = stats.guessDistribution[i];
        }
    }

    // Update the 'fails' progress bar
    const failProgressBar = document.getElementById('fail');
    const failCountSpan = document.getElementById('failCount');
    if (failProgressBar && failCountSpan) {
        const totalFails = stats.guessDistribution[6]; // Index 6 is for fails
        failProgressBar.value = totalFails;
        failProgressBar.max = stats.played;
        failCountSpan.textContent = totalFails;
    }
}


  
  function getFailCount() {
    const stats = getStatistics();
    return stats.guessDistribution[6]; // Ensure this is the correct index
  }
  
  function resetStatistics() {
    localStorage.removeItem('statistics');
  }
  
  // Expose these functions to be used in script.js
  window.statistics = {
    getStatistics,
    updateStatistics,
    resetStatistics
  };
  
// Make sure to update this function when the game is lost without a correct guess
function updateFailCount() {
    const stats = getStatistics();
    stats.fail = (stats.fail || 0) + 1;
    saveStatistics(stats);
}

// Add the getFailCount function to the window.statistics object
window.statistics.getFailCount = getFailCount;
  