class Leaderboard {
  constructor(api) {
    this.leaderboardApi = api;
    this.scoresList = [];
  }

  updateLeaderboard = async () => {
    try {
      this.scoresList = await this.leaderboardApi.getLeaderboard();
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }

    // if list is empty, add a score-item placeholder
    if (!this.scoresList.length) {
      const scoresListContainer = document.getElementById('all-scores-list');
      scoresListContainer.innerHTML = '';
      const scoreItem = document.createElement('li');

      scoreItem.classList.add('score-item');
      scoreItem.id = 'empty-list-item';
      // prettier-ignore
      scoreItem.innerHTML = `
        <li class="score-item">There are no submissions yet...</li>
    `;
      scoresListContainer.appendChild(scoreItem);
      return;
    }
    // if list is not empty empty, populate with the scoresList elements
    const scoresListContainer = document.getElementById('all-scores-list');
    scoresListContainer.innerHTML = '';
    this.scoresList.forEach((score, index) => {
      const scoreItem = document.createElement('li');

      scoreItem.classList.add('score-item');
      scoreItem.id = index;
      // prettier-ignore
      scoreItem.innerHTML = `
        <li class="score-item">${score.user}: ${score.score}</li>
    `;

      scoresListContainer.appendChild(scoreItem);
    });
  };
}

export default Leaderboard;
